import React from "react";
import { useState } from "react";

import Contacto from "./Contacto.jsx";
import Button from "./Button.jsx";
import FormAddContact from "./FormAddContact.jsx";


//create your first component
const Home = () => {
	const [estado, setEstado] = useState(false);

	const handleClickModal = () =>{
		return setEstado(!estado);
	}

	return (
		<div className="container">
			{estado ? (<FormAddContact handleClickModal={handleClickModal} />) : (<><Button handleClickModal={handleClickModal}/>
			<Contacto /></>)}
		</div>
	);
};

export default Home;
