
export const CREATE_AGENDA = (estado) => {
    return (fetch('https://assets.breatheco.de/apis/fake/contact/', {
        method: "POST",
        body: JSON.stringify(estado),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((resp) => {
        console.log(resp.ok); // will be true if the response is successfull
        return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
      })
      .catch(error => {console.log(error);}));  //Error handling
};

export const POST_ContactList = (nuevoContacto) => {
    return (fetch('https://assets.breatheco.de/apis/fake/contact/', {
        method: "POST",
        body: JSON.stringify(nuevoContacto),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((resp) => {
        console.log(resp.ok); // will be true if the response is successfull
        return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
      })
      .catch(error => {console.log(error);}));  //Error handling
};

export const GET_All_ContactList = (setEstado,agenda_slug) => {
    return (fetch('https://assets.breatheco.de/apis/fake/contact/agenda/' + agenda_slug, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
          console.log(resp.ok); // will be true if the response is successfull
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
        console.log(data); //this will print on the console the exact object received from the server
        setEstado(data);
      })
      .catch(error => {console.log(error);}));  //Error handling
};

export const DELETE_ContactList = (contact_id) => {
    return (fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
      }
      })
      .then(resp => {
          console.log(resp.status); // the status code = 200 or code = 400 etc.
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
          //here is were your code should start after the fetch finishes
          console.log(data); //this will print on the console the exact object received from the server
        })
        .catch(error => {console.log(error);}));  //Error handling
};

export const GET_ContactList = (contact_id) => {
  return (fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
      console.log(data); //this will print on the console the exact object received from the server
      return data;
    })
    .catch(error => {console.log(error);}));  //Error handling
};
      
export const UPDATE_ContactList = (newObj, contact_id) => {
    return (fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
        method: "PUT",
        body: JSON.stringify(newObj),
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(resp => {
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {console.log(error);}));  //Error handling
};

export const DELETE_All_ContactList = (agenda_slug) => {
    return (fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${agenda_slug}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
      }
      })
      .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {console.log(error);}));  //Error handling
};
