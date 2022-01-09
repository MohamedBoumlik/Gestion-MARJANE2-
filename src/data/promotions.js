// ------------------------- GET ------------------------- 

axios('http://127.0.0.1:3000/api/promo/get_promo')
// .then(res=>console.log(res.data))
.then(res => res.data.forEach(element => {
    document.getElementById('table').innerHTML +=
        `
            <tr>
                <td style="text-align: center; vertical-align: middle;">${element.percentage}</td>
                <td style="text-align: center; vertical-align: middle;">${element.rayon}</td>
                <td style="text-align: center; vertical-align: middle;">${element.chef_rayon_id}</td>
                <td style="text-align: center; vertical-align: middle;">${element.status}</td>
                <td style="text-align: center; vertical-align: middle;">${element.commentaire}</td>
                <td style="text-align: center; vertical-align: middle;">${element.fidelite}</td>
                <td style="text-align: center; vertical-align: middle;">
                    <button class="btn btn-outline-danger" onclick=deletepromo(${element.id})>Delete</button>
                </td>         
            </tr>

        `
}))
.catch(err => console.log(err))



deletepromo = (id) =>{

    if(confirm('"Are you sure you want to delete this user ?"')){

        axios.delete(`http://127.0.0.1:3000/api/promo/delete_promo/${id}`)
        .then(res => console.log('deleted successfully!'))
        .catch(err => console.log(err))
        window.location.reload();

    }
}