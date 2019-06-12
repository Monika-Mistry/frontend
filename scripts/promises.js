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

getAllAccounts();
