import React from "react";

import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppContextProvider = ({children}) => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [contactList, setContactList] = useState([{
        full_name: "Dave Bradley",
        address: "47568 NW 34ST, 33434 FL, USA",
        phone: "(786) 444-5566",
        email: "dave@gmail.com",
      }]);


	const handleClickSave = (e, name, email, phone, address) =>{
        e.preventDefault();

        const newObj = {
            full_name: name,
            address: address,
            phone: phone,
            email: email,
          }

        const newArr = [...contactList, newObj];

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");

		return (setContactList(newArr));
	}

    const handleClickDelete = (e, indice) =>{
        e.preventDefault();

        const newArr = store.contactList.filter((contact, index) => index != indice);

		return (setContactList(newArr));
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
        handleClickDelete,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;