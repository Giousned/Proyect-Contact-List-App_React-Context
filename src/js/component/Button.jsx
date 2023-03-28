import React from "react";

import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className="btn btn-success d-flex ms-auto mb-3">
      <Link
        className="fw-semibold text-white text-decoration-none"
        to="/formulario"
      >
        Add a new contact
      </Link>
    </button>
  );
};

export default Button;
