import React from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router";

import useAppContext from "../store/AppContext.js";



const FormAddContact = () => {

  const navigate = useNavigate();

  const {store, actions} = useAppContext();

  return (
    <form>
      <legend className="text-center fs-2 fw-bold">Add a new contact</legend>
      <div className="mb-3">
        <label htmlFor="exampleInputFullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFullName"
          placeholder="Full Name"
          value={store.name}
          onChange={(e) => actions.setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          placeholder="Enter email"
          value={store.email}
          onChange={(e) => actions.setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPhone"
          placeholder="Enter phone"
          value={store.phone}
          onChange={(e) => actions.setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAddress"
          placeholder="Enter address"
          value={store.address}
          onChange={(e) => actions.setAddress(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={(e) => {actions.handleClickSave(e, store.name, store.email, store.phone, store.address); navigate("/");}}>
          Save
        </button>
        <span className="link-primary text-decoration-underline" onClick={(e) => {actions.handleHomeAndReset(e); navigate("/");}}>
          Or get back to contacts
        </span>
      </div>
    </form>
  );
};

export default FormAddContact;


{/* <Link to="/">Or get back to contacts</Link> */}