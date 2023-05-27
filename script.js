const myBtn = document.getElementById("btn");

myBtn.addEventListener('click', (event) => {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if(fullname == "" || email =="" ||  password !== confirmPassword){
        let msg = document.getElementById("msg");
        msg.innerText = `Error : All fields are mandatory`;
    }
    else{
        location.href = "./profile.html"
    }
    
})

