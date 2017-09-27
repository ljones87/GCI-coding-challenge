import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../store';
import { Link } from 'react-router-dom'

class Main extends React.Component {

  componentWillMount() {
    this.props.fetchUsersThunk();
  }

  render () {
    const { users } = this.props;
    if (users) {
    return (
      <div>
      <table>
        <thead>
         <tr>
           <th>User Name</th>
           <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {
          users && users.map(user => (
          <tr key={user.id}>
            <th>{user.firstName} {user.lastName}</th>
            <td>{user.street}, {user.city}, {user.state}</td>
            <td>Edit</td>
          </tr>
          ))
        }
        </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>loading</h1>
  }
  }
}

const mapStateToProps = (state) => {
  return  {
    users: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return  {
    fetchUsersThunk() {
      dispatch(fetchUsersData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
