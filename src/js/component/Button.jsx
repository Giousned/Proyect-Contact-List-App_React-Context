import React from "react";

import { Link } from "react-router-dom";

import useAppContext from "../store/AppContext.js";

const Button = (props) => {
  
  const {store, actions} = useAppContext();

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-danger fw-semibold text-white text-decoration-none mb-3" onClick={actions.handleBORRARAgenda}>
        BORRAR AGENDA!
      </button>
      <button className="btn btn-success mb-3">
        <Link
          className="fw-semibold text-white text-decoration-none"
          to="/formulario"
        >
          Add a new contact
        </Link>
      </button>
    </div>
  );
};

export default Button;
