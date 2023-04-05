import React from "react";

import { Link } from "react-router-dom";

import Modal from "./Modal.jsx";


const TarjetaContacto = (props) => {


  return (
    <li className="list-group-item">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://img.freepik.com/vector-premium/dibujos-animados-cara-nino-lindo_18591-41509.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title fs-2">{props.item.full_name}</h5>
              <p className="card-text fs-3">
                <i className="fa-solid fa-location-dot"></i>
                {props.item.address}
              </p>
              <p className="card-text fs-5">
                <i className="fa-solid fa-phone"></i>
                {props.item.phone}
              </p>
              <p className="card-text fs-6">
                <i className="fa-solid fa-envelope"></i>
                {props.item.email}
              </p>
            </div>
          </div>
          <div className="col-md-1">
            <p className="card-icon">
              <Link to={"/update/" + props.id}>
                <i className="fa-solid fa-pencil"></i>
              </Link>
            </p>
          </div>
          <div className="col-md-1">
            <div className="card-icon">
              <i className="fa-solid fa-trash-can" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              <Modal index={props.index} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TarjetaContacto;
