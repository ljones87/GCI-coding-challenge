import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUserData } from '../store';
//import { FormData } from './FormData.jsx';

const AddUser = (props) => {
  return (
    <div >
      <h2 className='banner'> New User Information </h2>
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
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const street = event.target.street.value;
      const city = event.target.city.value;
      const state = event.target.state.value;
      const credentials = {firstName, lastName, street, city, state};
      dispatch(addUserData(credentials));
      ownProps.history.push('/');
    }
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
