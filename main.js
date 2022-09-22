function validate(){
    var username= document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'root' && password === 'root'){
        alert('login sucessful');
    }else{
        alert('login failed');
    }
}