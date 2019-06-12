const makeRequest = (method, url, body) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.onload = () => {
      if (req.status >= 200 && req.status <= 299){
        resolve(req.responseText);
      } else {
        reject(new Error("Error"));
      };
    };

    req.open(method, url);
    req.send(body);
  });
};

const getAllAccounts = () => {
  makeRequest("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts").then(req=>{
    console.log(req);
  }).catch(error => console.log(error.message));
};

const getAnAccount = () => {
  let id = document.getElementById('accountId').value;

  makeRequest("GET", `http://localhost:8080/AccountSETemplate/api/account/getAnAccount/${id}`).then(req => {
    if(req != "null"){
      console.log(req);
    } else {
      console.log("Account does not exist");
    }
  }).catch(error => console.log(error.message));
};

const createAccount = () => {
  const acc = {
    accountNumber : document.getElementById('accNo').value,
    firstName : document.getElementById('firstName').value,
    lastName : document.getElementById('lastName').value
  };

  makeRequest("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount", JSON.stringify(acc)).then(req => console.log(req)).catch(error => console.log(error.message));
};

const deleteAccount = () => {
  let id = document.getElementById('delAccId').value;

  makeRequest("DELETE", `http://localhost:8080/AccountSETemplate/api/account/deleteAccount/${id}`).then(req => {console.log(req)}).catch(error => {console.log(error.message)});

};

const updateAccount = () => {
  const acc = {
    accountNumber : document.getElementById('upAccNo').value,
    firstName : document.getElementById('upFirstName').value,
    lastName : document.getElementById('upLastName').value
  };

  let id = document.getElementById('upId').value;

  makeRequest("PUT", `http://localhost:8080/AccountSETemplate/api/account/updateAccount/${id}`, JSON.stringify(acc)).then(req => console.log(req)
).catch(error => console.log(error.message));
};

getAllAccounts();
