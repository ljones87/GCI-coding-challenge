import React from 'react';
import { connect } from 'react-redux';


const FormData = () => {
  return (
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
      </div>
    </div>
  )
}

export default FormData;
