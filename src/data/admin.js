// const axios = require("axios");
// ------------------------- GET ------------------------- 

axios('http://127.0.0.1:3000/api/cAdmin/cAdmin')

.then(res => res.data.forEach(element => {
  document.getElementById('table').innerHTML +=
  `
  <tr>
    <td style="text-align: center; vertical-align: middle;">${element.id}</td>
    <td style="text-align: center; vertical-align: middle;">${element.nom}</td>
    <td style="text-align: center; vertical-align: middle;">${element.email}</td>
    <td style="text-align: center; vertical-align: middle;">${element.center}</td>
    <td style="text-align: center; vertical-align: middle;">
      <button class="btn btn-outline-danger" onclick=deleteCA(${element.id})>Delete</button>
    </td>         
  </tr>
  `
}))
.catch(err => console.error(err));

// ------------------------- POST ------------------------- 
addCA = () => {

  axios.post('http://127.0.0.1:3000/api/cAdmin/create',{
    nom: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    center: document.getElementById('center').value
  })
  .then(res =>console.log('DONE'))
  .catch(err => console.error(err));
  window.location.reload();
  
}

// ------------------------- DELETE ------------------------- 

deleteCA = (id) => {

  if (confirm("Are you sure you want to delete this user ?")){

    axios.delete(`http://127.0.0.1:3000/api/cAdmin/delete/${id}`)
    .then(res => console.log('Deleted successfully !'))
    .catch(err => console.error(err));
    window.location.reload();
  }
  
}
