import React from "react";

import { createContext, useContext, useState, useEffect } from "react";

import {CREATE_AGENDA, POST_ContactList, GET_All_ContactList, DELETE_All_ContactList, DELETE_ContactList, UPDATE_ContactList} from "../store/services.js"


const AppContext = createContext();


export const AppContextProvider = ({children}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [nombreAgenda, setNombreAgenda] = useState("guille_super_agenda");
    const [contactList, setContactList] = useState([]);


    useEffect(() => {GET_All_ContactList(setContactList, nombreAgenda)}, [])

    const Reset = () => {

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");

    }

    const handleHomeAndReset = (e) => {

        e.preventDefault();

        Reset();

    }

	const handleClickSave = (e, name, email, phone, address) => {
        e.preventDefault();

        const newObj = {
            full_name: name,
            email: email,
            agenda_slug: nombreAgenda,
            address: address,
            phone: phone,
        }

        POST_ContactList(newObj)
            .then(() => {GET_All_ContactList(setContactList, nombreAgenda); Reset();});

	}

    const handleClickDeleteContact = (itemID) => {

        DELETE_ContactList(itemID)
            .then(() => GET_All_ContactList(setContactList, nombreAgenda));

	}

    const handleClickUpdate = (e, contact, id) => {
        e.preventDefault();

        const newObj2 = {
            full_name: contact.name,
            email: contact.email,
            agenda_slug: nombreAgenda,
            address: contact.address,
            phone: contact.phone,
        }

        UPDATE_ContactList(newObj2, id)
            .then(() => {GET_All_ContactList(setContactList, nombreAgenda); Reset();});

	}

    const handleBORRARAgenda = () => {

        DELETE_All_ContactList(nombreAgenda)
            .then(() => setContactList(false))

    }

    const handleCREARAgenda = (e, nuevaAgenda) => {
        e.preventDefault();

        setNombreAgenda(nuevaAgenda)

        // OBJETO PARA CREAR NUEVAS AGENDAS
        const objCrearAgenda = {
            full_name: "Dave Bradley",
            email: "dave@gmail.com",
            agenda_slug: nombreAgenda,  // NOMBRE NUEVA AGENDA
            address:"47568 NW 34ST, 33434 FL, USA",
            phone:"7864445566"
        }

        CREATE_AGENDA(objCrearAgenda)
            .then(() => GET_All_ContactList(setContactList, nombreAgenda));

    }



    const store = {
        name,
        email,
        phone,
        address,
        contactList,
        nombreAgenda,
    };
    
    const actions = {
        setName,
        setEmail,
        setPhone,
        setAddress,
        setNombreAgenda,
        handleClickSave,
        handleClickDeleteContact,
        handleBORRARAgenda,
        handleClickUpdate,
        handleCREARAgenda,
        handleHomeAndReset,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;


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
