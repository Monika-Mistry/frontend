function getAnAccountRequest(){
  let req = new XMLHttpRequest();
  let id = document.getElementById('accountId').value

  req.onload = function(){
    if(typeof(document.getElementById('account-result')) != 'undefined' && document.getElementById('account-result') != null){
      document.getElementById('getAnAccount').removeChild(document.getElementById('account-result'));
    }
    let account = document.createElement('p');
    account.innerHTML = req.responseText;
    account.id = 'account-result';
    document.getElementById('getAnAccount').appendChild(account);
  };

  req.open("GET", `http://localhost:8080/AccountSETemplate/api/account/getAnAccount/${id}`);
  req.send();

}

function createAccountRequest() {
  let req = new XMLHttpRequest();
  const acc = {
    accountNumber : document.getElementById('accNo').value,
    firstName : document.getElementById('firstName').value,
    lastName : document.getElementById('lastName').value
  };

  req.onload = function(){
    document.getElementById('newAcc').innerText = "Account Created";
  };

  req.open("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount");
  req.send(JSON.stringify(acc));


}

function getAllAccountsRequest() {
  let req = new XMLHttpRequest();

  req.onload = function() {
    let out = document.getElementById('allAcc');
    console.log(req.responseText);
    out.innerHTML = req.responseText;
  };

  req.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts");
  req.send();
}

function removeAccountRequest(){
  let req = new XMLHttpRequest();
  let id = document.getElementById('delAccId').value;

  req.onload = function() {
    console.log("Account deleted");
  };

  req.open("DELETE", `http://localhost:8080/AccountSETemplate/api/account/deleteAccount/${id}`);
  req.send();
}

function updateAccountRequest(){
  let req = new XMLHttpRequest();
  req.onload = function(){
    document.getElementById('newAcc').innerText = "Account Created";
  };

  req.open("PUT", `http://localhost:8080/AccountSETemplate/api/account/updateAccount/${id}`);
  req.send();

  const acc = {
    accountNumber : document.getElementById('accNo').value,
    firstName : document.getElementById('firstName').value,
    lastName : document.getElementById('lastName').value
  };

}

function makeRequest(method, url){
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url);
    req.send();
    req.onload = () => {
      if (req.status >= 200 && req.status <= 299){
      resolve(req);
    } else {
      reject(new Error("Error"));
    }};

  });
}

function getAll(){
  makeRequest("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts").then((req)=>{
    let out = document.getElementById('allAcc');
    console.log(req.responseText);
    out.innerHTML = req.responseText;
  }).catch((error) => console.log(error.message));
}
