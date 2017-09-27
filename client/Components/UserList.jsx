import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserData } from '../store';

const UserList = (props) => {

  const { users, handleClick } = props;

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
        <Link to={'/add-user'}>
          <button>
            Add New User
          </button>
        </Link>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(event) {
      const userId = event.target.id;
      dispatch(deleteUserData(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
