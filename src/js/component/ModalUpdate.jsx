import React from "react";

import { useNavigate } from "react-router";

import useAppContext from "../store/AppContext.js";

const ModalUpdate = (props) => {

  const {store, actions} = useAppContext();

  const navigate = useNavigate();

  return (
    <div className="modal fade" id={`updateModal-${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>You will update this Contact!</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Oh no!
            </button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={(e) => {actions.handleClickUpdate(e, props.objContact, props.id); navigate("/")}}>
              Yes baby!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
