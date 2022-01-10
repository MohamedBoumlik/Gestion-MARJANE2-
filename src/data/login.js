// ------------------------- Admin login ------------------------- 
login = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://127.0.0.1:3000/api/admin/login',{
        email: email,
        password: password
    })
    .then(res => {
        document.cookie = "admin token = " + res.data ,
        window.location.href='AdminDash'
    })
    .catch(err =>  console.log(err))
    
}

// ------------------------- Center Admin login ------------------------- 

centerLog = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://127.0.0.1:3000/api/centeradmin/login',{
        email: email,
        password: password
    })
    .then(res => {
        document.cookie = "center admin token = " + res.data,
        window.location.href='centerAdminDash'
    })
    .catch(err =>  console.log(err))
    
}

// ------------------------- Chef login ------------------------- 

chefLog = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://127.0.0.1:3000/api/chefrayon/login',{
        email: email,
        password: password
    })
    .then(res => {
        document.cookie = "chef token = " + res.data 
        // window.location.href='centerAdminDash'
    })
    .catch(err =>  console.log(err))
    
}