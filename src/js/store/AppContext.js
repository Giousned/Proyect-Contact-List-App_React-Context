import React from "react";

import { createContext, useContext, useState, useEffect } from "react";

import {CREATE_AGENDA, POST_ContactList, GET_All_ContactList, GET_ContactList, DELETE_All_ContactList, DELETE_ContactList, UPDATE_ContactList} from "../store/services.js"


const AppContext = createContext();


export const AppContextProvider = ({children}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [newContact, setNewContact] = useState(
        {
            full_name: "name",
            email: "email",
            agenda_slug: "guille_super_agenda",
            address: "address",
            phone: "phone",
          }
    ) 

    const objCrearAgenda = {
        full_name: "Dave Bradley",
        email: "dave@gmail.com",
        agenda_slug: "guille_super_agenda",  // CAMBIAR AQUI PARA CREAR NUEVA AGENDA
        address:"47568 NW 34ST, 33434 FL, USA",
        phone:"7864445566"
    }

    const [contactList, setContactList] = useState([]);

    // CREAR AGENDA NUEVA CON NOMBRE NUEVO, HAY QUE USAR EL OBJETO MAS ARRIBA Y PASARLE EL NOMBRE EN AGENDA_SLUG
    // useEffect(() => CREATE_AGENDA(objCrearAgenda), [])
    useEffect(() => {GET_All_ContactList(setContactList, "guille_super_agenda")}, [newContact])


	const handleClickSave = (e, name, email, phone, address) => {
        e.preventDefault();

        const newObj = {
            full_name: name,
            email: email,
            agenda_slug: "guille_super_agenda",
            address: address,
            phone: phone,
        }

        POST_ContactList(newObj);

        setNewContact(newObj)

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
	}

    const handleClickDeleteContact = (itemID) => {

        console.log(itemID)

        // DELETE_ContactList(itemID)

	}

    const handleClickUpdate = (itemID) => {


	}

    const handleBORRARAgenda = () => {

        // DELETE_All_ContactList("guille_super_agenda")

    }

    const store = {
        name,
        email,
        phone,
        address,
        contactList,
    };
    
    const actions = {
        setName,
        setEmail,
        setPhone,
        setAddress,
        handleClickSave,
        handleClickDeleteContact,
        handleBORRARAgenda,
        handleClickUpdate,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;


// {
//     full_name: "Dave Bradley",
//     address: "47568 NW 34ST, 33434 FL, USA",
//     phone: "(786) 444-5566",
//     email: "dave@gmail.com",
// }


// const newArr = [...contactList, newObj];
// setName("");
// setEmail("");
// setPhone("");
// setAddress("");
// return (setContactList(newArr));
// const newArr = store.contactList.filter((contact) => contact != itemObj);
// return setContactList(newArr);