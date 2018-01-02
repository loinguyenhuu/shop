const signIn =(email, password) => (
    fetch('http://10.90.114.24:1080/api/login.php',{

        method:'POST',
        headers:{
            'Content-type': 'application/json',
            Accept:'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => res.json())
);
module.exports = signIn;