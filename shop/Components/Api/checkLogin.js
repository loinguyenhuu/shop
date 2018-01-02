const checkLogin = (token) => (
    fetch('http://10.90.114.24:1080/api/check_login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.json())
);

module.exports = checkLogin;
