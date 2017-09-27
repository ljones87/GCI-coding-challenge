import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { deleteUserData } from '../store';
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';


const UserList = (props) => {

  const { users, handleClick } = props;

  if (users) {
    return (
      <div>
        <h4 className="LJ">Lina Jones GCI React Challenge</h4>
        <h2 className="banner">Current Users</h2>
        <div className="btn add">
        <Link to={'/add-user'}>
        <button className='add-user'>
          Add New User
        </button>
      </Link></div>
        <table>
          <thead>
            <tr>
              <th className="deleteH">Remove</th>
              <th>Name</th>
              <th>Address</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map(user => (
                <tr key={user.id}>
                  <td className="deleteB">
                    <FaTrash
                        id={user.id}
                        onClick={handleClick}
                        />
                  </td>
                  <th>{user.firstName} {user.lastName}</th>
                  <td>{user.street}, {user.city}, {user.state}</td>
                  <td className="edit">
                    <Link to={`/edit-user/${user.id}`}>
                      <FaEdit />
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.users
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
