import React from "react";

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
              <h5 className="card-title">{props.item.full_name}</h5>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i>
                {props.item.address}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i>
                {props.item.phone}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-envelope"></i>
                {props.item.email}
              </p>
            </div>
          </div>
          <div className="col-md-1">
            <p className="card-icon">
              <i className="fa-solid fa-pencil"></i>
            </p>
          </div>
          <div className="col-md-1">
            <p className="card-icon">
              <i className="fa-solid fa-trash-can"></i>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TarjetaContacto;
