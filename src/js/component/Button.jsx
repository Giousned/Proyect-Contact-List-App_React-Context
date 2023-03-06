import React from "react";

const Button = (props) => {
    return (<button onClick={props.handleClickModal} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-success d-flex ms-auto mb-3">Add a new contact</button>);
}

export default Button;
