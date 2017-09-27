import React from 'react';
import { connect } from 'react-redux';
import { addUserData } from '../store'

const AddUser = (props) => {
  return (
    <div id="newUserForm">
      <h2> New User Information </h2>
      <form
        onSubmit={props.handleSubmit}>

        <div className="row">
          <label>First Name</label>
          <div>
            <input
              firstName="firstName"
              type="text"
              required
            />
          </div>
        </div>


        <div className="row">
          <label>Last Name</label>
          <div>
            <input
              lastName="lastName"
              type="text"
              required
            />
          </div>
        </div>

        <div className="row">
          <label>Street</label>
          <div>
            <input
              street="street"
              type="text"
              required
            />
          </div>
        </div>

        <div className="row">
          <label>City</label>
          <div>
            <input
              city="city"
              type="text"
              required
            />
          </div>
        </div>

        <div className="row">
          <label>State</label>
          <div>
            <input
              state="state"
              type="text"
              required
            />
          </div>
        </div>

      </form>
    </div>
  )
}
