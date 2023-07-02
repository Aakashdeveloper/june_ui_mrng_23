const getId = () => {
    let id = Math.floor(Math.random() * 1000000);
    document.getElementById('eid').value = id
}

function validateFname(){
    let name = document.getElementById('fname').value;
    let fdiv = document.getElementsByClassName('fdiv')[0];
    if(name.trim().length == 0 ){
        document.getElementById('fout').innerText = "FirstName is required";
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
    }else{
        document.getElementById('fout').innerText = "";
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

const validateEmail = () => {
    let email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText = "Email is required";
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText = "Email valid email";
        }else{
            document.getElementById('eout').innerText = ""
        }
    }
}