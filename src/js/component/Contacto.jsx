import React from "react";

import useAppContext from "../store/AppContext.js";

import TarjetaContacto from "./TarjetaContacto.jsx";

// import gifLoading from "../../img/gif_loading.gif";


const Contacto = () => {

  const {store, actions} =useAppContext();

  return (
    <div className="d-flex justify-content-center">
      {store.contactList.length !== 0 
        ? <ul className="list-group">{store.contactList.map((item,index) => <TarjetaContacto item={item} key={index} id={item.id} />)}</ul>
        : <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" />
        }
    </div>
  );
};

export default Contacto;


{/* <ul className="list-group">
{store.contactList.map((item,index) => <TarjetaContacto item={item} key={index} id={item.id} />)}
</ul> */}