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
    <div className='navigation'>
      <h2>Update Information for {user.firstName} {user.lastName}</h2>
      <h4> Current Information:</h4>
          <h5>{user.street}, {user.city}, {user.state}</h5>

      <form
        onSubmit={props.handleSubmit}>
        <div>
          <div className="row">
            <label>First Name</label>
            <div>
              <input
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
                name="state"
                type="text"
                required
              />
            </div>
          </div>
          <div className="col-sm-offset-2 col-sm-10">
          <button type="submit">
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
    user: state.userData.find(user => user.id === userId),
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
      const credentials = {firstName, lastName, street, city, state};
      dispatch(updateUserData(userId, credentials));
      ownProps.history.push('/');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);