//import axios from "axios";
let buttonAdd = document.getElementById("Add-Button");
//Agregamos datos
buttonAdd.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let documents = document.getElementById("document").value;
  let birthdate = document.getElementById("date").value;
  let city = document.getElementById("city").value;
  let neighborhood = document.getElementById("neigh").value;
  let cellphone = document.getElementById("phone").value;
  let dates = { 
    name,
    lastName,
    documents,
    birthdate,
    city,
    neighborhood,
    cellphone
  };
  //console.log(dates)
  sendData(dates)
});
let URL= "http://localhost:3001/user";

function sendData(dates){
  fetch(URL, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(dates), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}