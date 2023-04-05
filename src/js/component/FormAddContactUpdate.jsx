import React from "react";

import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router";

import { GET_ContactList } from "../store/services.js";

import useAppContext from "../store/AppContext.js";

import ModalUpdate from "./ModalUpdate.jsx";



const FormAddContactUpdate = (props) => {

  const navigate = useNavigate();
  const params = useParams();

  const arrayPrint = GET_ContactList(params.theid);

  console.log(arrayPrint);

  // if (arrayPrint.full_name != "undefined") {console.log(arrayPrint.full_name);}
  

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
          placeholder={arrayPrint.full_name != "undefined" ? arrayPrint["full_name"] : "Full name"}
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
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Save
        </button>
        <ModalUpdate />
        <span>
          <Link to="/">Or get back to contacts</Link>
        </span>
      </div>
    </form>
  );
};

export default FormAddContactUpdate;


// onClick={(e) => {actions.handleClickSave(e, store.name, store.email, store.phone, store.address); navigate("/")}}
