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

  req.open("GET", 'http://localhost:8080/AccountSETemplate/api/account/getAnAccount/'.concat(id));
  req.send();

}

// function getAllAccountsRequest(){
//   let req = new XMLHttpRequest();
//
//   req.onload = function(){
//     for(let i in req.responseText){
//       let account = document.createElement('p');
//       account.innerHTML = i;
//       account.id = 'account-result';
//       document.getElementById('getAnAccount').appendChild(account);
//     }
//   };
//
//   req.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts");
//   req.send();
// }
