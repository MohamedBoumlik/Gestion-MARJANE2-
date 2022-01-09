// ------------------------- GET ------------------------- 

axios('http://127.0.0.1:3000/api/centeradmin/crudcenteradmin')
.then(res => res.data.forEach(element => {
    document.getElementById('table').innerHTML += 
        `
            <tr>
                <td style="text-align: center; vertical-align: middle;">${element.id}</td>
                <td style="text-align: center; vertical-align: middle;">${element.nom}</td>
                <td style="text-align: center; vertical-align: middle;">${element.email}</td>
                <td style="text-align: center; vertical-align: middle;">${element.rayon}</td>
                <td style="text-align: center; vertical-align: middle;">${element.center}</td>
                <td style="text-align: center; vertical-align: middle;">
                <button class="btn btn-outline-danger" onclick=deleteChef(${element.id})>Delete</button>
                </td>         
            </tr>

        `
}))
.catch(err => console.log(err));

// ------------------------- POST ------------------------- 

addChef = () => {

    axios.post('http://127.0.0.1:3000/api/centeradmin/createcenteradmin',{
      nom: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      rayon: document.getElementById('rayon').value,
      center: document.getElementById('center').value
    })
    .then(res =>console.log('DONE'))
    .catch(err => console.error(err));
    window.location.reload();
    
}

// ------------------------- DELETE ------------------------- 

deleteChef = (id) => {

    if (confirm("Are you sure you want to delete this user ?")) {

        axios.delete(`http://127.0.0.1:3000/api/centeradmin/deletecenteradmin/${id}`)
        .then(res => console.log('Deleted successfully !'))
        .catch(err => console.error(err));
        window.location.reload();

    }
    
}

// ------------------------- Add promo ------------------------- 

addpromo=() =>{

    let percentage = document.getElementById('percentage').value;
    let rayon = document.getElementById('ayon').value;

    if (rayon == 'multimedia' && percentage <= 20 || rayon != 'multimedia' && percentage <=50) {
        
        axios.post('http://127.0.0.1:3000/api/promo/add_promo', {
    
            percentage: percentage,
            rayon: rayon,
            chef_rayon_id: document.getElementById('chefName').value
        })
        .then(res =>console.log('Promo added'))
        .catch(err =>console.log(err));
        window.location.reload();

    }else{
        alert("The promotion percentage is too hight!");
    }
}