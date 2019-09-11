import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStaff } from "../../_actions/staff";

const AddStaff = ({ addStaff, history }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    mobile: "",
    email: ""
  });

  const { firstName, lastName, username, password, mobile, email } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addStaff(formData, history);
  };

  return (
    <Fragment>
      <div className="form-title">
        <Link to="/staffs" className="btn btn-primary">
          <i class="fa fa-arrow-left"> </i> Go Back
        </Link>
        <h1 className="pt-4">Add Employee</h1>
        <small className="lead">
          Welcome a new Employee to your company...
        </small>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John"
              name="firstName"
              value={firstName}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Smith"
              name="lastName"
              value={lastName}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="johnsmith"
              name="username"
              value={username}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="******"
              name="password"
              value={password}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Repeat Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*******"
              name="password2"
              onChange={e => onChangeHandler(e)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Mobile</label>
            <input
              type="number"
              className="form-control"
              placeholder="123-456-789"
              name="mobile"
              value={mobile}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="john@gmail.com"
              name="email"
              value={email}
              onChange={e => onChangeHandler(e)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

AddStaff.propTypes = {
  addStaff: PropTypes.func.isRequired
};

export default connect(
  null,
  { addStaff }
)(withRouter(AddStaff));
