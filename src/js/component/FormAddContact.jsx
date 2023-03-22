import React from "react";

const FormAddContact = (props) => {
  return (
    <form>
      <legend className="text-center fs-2 fw-bold">Add a new contact</legend>
      <div className="mb-3">
        <label for="exampleInputFullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFullName"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPhone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPhone"
          placeholder="Enter phone"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAddress"
          placeholder="Enter address"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
      <a
        onClick={props.handleClickModal}
        className="stretched-link text-primary"
      >
        Or get back to contacts
      </a>
    </form>
  );
};

export default FormAddContact;
