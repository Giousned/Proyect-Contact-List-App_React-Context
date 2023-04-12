import React from "react";

import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { GET_ContactList } from "../store/services.js";

import useAppContext from "../store/AppContext.js";

import ModalUpdate from "./ModalUpdate.jsx";



const FormAddContactUpdate = () => {
  
  const {store, actions} = useAppContext();

  const navigate = useNavigate();
  
  const params = useParams();


  useEffect(() => {
    GET_ContactList(params.theid)
      .then(data => {
        actions.setName(data.full_name)
        actions.setEmail(data.email)
        actions.setPhone(data.phone)
        actions.setAddress(data.address)
      })
    },[]) 
  

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
          placeholder="Full name"
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
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#updateModal-${params.theid}`}>
          Save
        </button>
        <ModalUpdate objContact={{name: store.name, email: store.email, phone: store.phone, address: store.address}} id={params.theid} />
        <span className="link-primary text-decoration-underline" onClick={(e) => {actions.handleHomeAndReset(e); navigate("/");}}>
          Or get back to contacts
        </span>
      </div>
    </form>
  );
};

export default FormAddContactUpdate;
