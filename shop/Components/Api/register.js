const register =(email, password, name) => (
    fetch('http://10.90.114.24:1080/api/register.php',{

        method:'POST',
        headers:{
            'Content-type': 'application/json',
            Accept:'application/json'
        },
        body: JSON.stringify({email, password, name})
    })
        .then(res => res.text())
);
module.exports = register;