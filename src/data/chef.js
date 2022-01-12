// ------------------------- GET ------------------------- 

axios('http://127.0.0.1:3000/api/promo/get_promo')
.then(res => res.data.forEach(element => {
  let rayon= document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
      
  if(element.rayon == rayon.cRayon){
  document.getElementById('table').innerHTML +=
  `
    <tr>
      <td style="text-align: center; vertical-align: middle;">${element.id}</td>
      <td style="text-align: center; vertical-align: middle;">${element.percentage}</td>
      <td style="text-align: center; vertical-align: middle;">${element.rayon}</td>
      <td style="text-align: center; vertical-align: middle;">${element.chef_rayon_id}</td>
      <td style="text-align: center; vertical-align: middle;">${element.status}</td>
      <td style="text-align: center; vertical-align: middle;">${element.fidelite}</td>
      <td style="text-align: center; vertical-align: middle;">
        <button class="btn btn-outline-success" id="status" value='accept' onclick=updatepromo(${element.id})>Accept</button>
        <button class="btn btn-outline-danger" id="NO" value='refuse' onclick=refusepromo(${element.id})>Refuse</button>
      </td>         
    </tr>
  `
  }

}))
.catch(err => console.error(err));

// ------------------------- Update Promo Status ------------------------- 

updatepromo = (id) => {
  let date = new Date();
  let hour = date.getHours();
  
  if (hour <= 12 && hour >= 8) {
    
    axios.put(`http://127.0.0.1:3000/api/promo/update_status/${id}`,{
      status : document.getElementById('status').value
    })
    .then(res =>console.log('updated successfully !'))
    .catch(err => console.error(err));
    window.location.reload();

  }else{
    alert("You can't update this status any more !")
  }

}

refusepromo = (id) => {
  let date = new Date();
  let hour = date.getHours();
 
  if (hour <= 12 && hour >= 8) {
    
    axios.put(`http://127.0.0.1:3000/api/promo/update_status/${id}`,{
      status : document.getElementById('NO').value
    })
    .then(res =>console.log('updated successfully !'))
    .catch(err => console.error(err));
    window.location.reload();

  }else{
    alert("You can't update this status any more !")
  }

}

// ------------------------- Update Promo Status ------------------------- 

logout =() => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  window.location.reload();
}