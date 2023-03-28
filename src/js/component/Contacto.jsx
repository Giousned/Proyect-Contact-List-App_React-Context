import React from "react";

import useAppContext from "../store/AppContext.js";

import TarjetaContacto from "./TarjetaContacto.jsx";


const Contacto = () => {

  const {store, actions} =useAppContext();

  return (
    <ul className="list-group">
        {store.contactList.map((item,index) => <TarjetaContacto item={item} key={index} index={index}/>)}
    </ul>
  );
};

export default Contacto;


// const arr = [
//   {
//     full_name: "Dave Bradley",
//     address: "47568 NW 34ST, 33434 FL, USA",
//     phone: "(786) 444-5566",
//     email: "dave@gmail.com",
//   },
//   {
//     full_name: "Perico Garcia",
//     address: "58441 NW 34ST, 33434 MI, USA",
//     phone: "(547) 421-4715",
//     email: "perico@gmail.com",
//   },
//   {
//     full_name: "Andres Lopez",
//     address: "36445 NW 34ST, 33434 NV, USA",
//     phone: "(245) 564-1216",
//     email: "andres@gmail.com",
//   },
// ];