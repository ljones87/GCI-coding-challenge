import React from 'react';
import { connect } from 'react-redux';
import { updateUserData } from '../store';
import { withRouter } from 'react-router-dom';
//import FormData from './FormData.jsx';

const EditUser = (props) => {
  if (!props.user) {
    return (
      <h1>Loading</h1>
    )
  } else {
    const { user } = props;
    return (
      <div >
        <h2 className='banner'>Update Information for {user.firstName} {user.lastName}</h2>
        <h4>Current Information:
          <span>  {user.street}, {user.city}, {user.state}</span>
        </h4>
        <form onSubmit={props.handleSubmit}>
          <div>
            <div className="row">
              <label>First Name</label>
              <div>
                <input
                defaultValue={user.firstName}
                  name="firstName"
                  type="text"
                  required
                />
              </div>
            </div>


            <div className="row">
              <label>Last Name</label>
              <div>
                <input
                defaultValue={user.lastName}
                  name="lastName"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="row">
              <label>Street</label>
              <div>
                <input
                defaultValue={user.street}
                  name="street"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="row">
              <label>City</label>
              <div>
                <input
                defaultValue={user.city}
                  name="city"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="row">
              <label>State</label>
              <div>
                <input
                 defaultValue={user.state}
                  name="state"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="submit"
                >
                submit
          </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const userId = Number(ownProps.match.params.userId);
  return {
    user: state.users.find(user => user.id === userId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = Number(ownProps.match.params.userId);
  return {
    handleSubmit(event) {
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const street = event.target.street.value;
      const city = event.target.city.value;
      const state = event.target.state.value;
      const credentials = { firstName, lastName, street, city, state };
      dispatch(updateUserData(userId, credentials));
      ownProps.history.push('/');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
