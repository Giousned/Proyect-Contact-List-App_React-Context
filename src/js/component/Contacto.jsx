import React from "react";

import useAppContext from "../store/AppContext.js";

import TarjetaContacto from "./TarjetaContacto.jsx";


const Contacto = () => {

  const {store, actions} =useAppContext();

  return (
    <ul className="list-group">
        {store.contactList.map((item,index) => <TarjetaContacto item={item} key={index} id={item.id} />)}
    </ul>
  );
};

export default Contacto;
