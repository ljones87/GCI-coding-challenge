import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData, deleteUserData } from '../store';
import { Link } from 'react-router-dom'

class Main extends React.Component {

  componentWillMount() {
    this.props.fetchUsersThunk();
  }

  render () {
    const { users, handleClick } = this.props;
    if (users) {
    return (
      <div>
      <table>
        <thead>
         <tr>
           <th>Remove</th>
           <th>User Name</th>
           <th>Address</th>
         </tr>
        </thead>
        <tbody>
          {
            users && users.map(user => (
              <tr key={user.id}>
                <td className="btn delete">
                  <button>
                    <span
                      id={user.id}
                      onClick={handleClick}>X
                </span>
                  </button>
                </td>
                <th>{user.firstName} {user.lastName}</th>
                <td>{user.street}, {user.city}, {user.state}</td>
                <td className="btn edit">
                  <Link to={`/edit-user/${user.id}`}>
                    <button className="btn btn-default btn-xs">
                      <span >Edit</span>
                    </button>
                  </Link>
            </td>
          </tr>
          ))
        }
        </tbody>
        </table>
        <Link to={`/add-user`}>
        <button >
          <span >Add New User</span>
        </button>
      </Link>
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
    },
    handleClick(event) {
      const userId = event.target.id;
      dispatch(deleteUserData(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
