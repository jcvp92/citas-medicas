//import axios from "axios";
const axios= require("axios") 
async function getDates() {
  let URL = "http://localhost:3001/user";
  let consult = await axios.get(URL);
  if (consult.status === 200) {
    let response = consult.data;
    console.log(response)
    let table = document.getElementById("table-contents");
    table.innerHTML = "";
    response.forEach(data => {
      table.innerHTML = `<tr>
      <td>${data.name}</td>
      </tr>`;
    });
  } else {
    let table = document.getElementById("table-contents");
    table.innerHTML = `<tr>
      <td>Error</td>
      </tr>`;
  }
}
getDates();
