function getAnAccountRequest(){
  let req = new XMLHttpRequest();

  req.onload = function(){
    let res = document.getElementById('getAnAccount');
    res.innerHTML = req.responseText;

  };

  req.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAnAccount/1");
  req.send();

}
