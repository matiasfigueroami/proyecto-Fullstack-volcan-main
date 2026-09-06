let form=document.getElementById("formulario");
let email=document.getElementById("email").value;
let passw=document.getElementById("password").value;

let list=["user1@gmail.com",""]
let list2=["1234","admin1234"]


form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!email=="admin@gmail.com") {
        alert("Usuario no existe!");
        email.focus();
        return;
    }

    form.submit();
    
});