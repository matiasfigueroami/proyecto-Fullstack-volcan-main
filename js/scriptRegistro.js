let formulario=document.getElementById("formulario");
let email=document.getElementById("email");
let passw=document.getElementById("password");
let passw2=document.getElementById("password2");
let rut=document.getElementById("rut");
let fono=document.getElementById("fono");
let nombre=document.getElementById("nombre");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!/^[^\s@]+@gmail\.com$/.test(email.value)) {
        alert("Email inválido!");
        email.focus();
        return;
    }
    if (!nombre.value.trim()) {
        alert("El nombre es obligatorio!");
        nombre.focus();
        return;
    }
    if (passw.value.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres!");
        passw.focus();
        return;
    }
    if (passw.value!=passw2.value) {
        alert("Las contraseñas no coinciden!");
        passw.focus();
        return;
    }
    if(!/^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-[0-9kK]$/.test(rut.value)){
        alert("El RUT no tiene el formato correcto. Ejemplo: 22.296.811-1");
        rut.focus();
        return;
    }
    if (!/^+56[0-9]{9}$/.test(fono.value.trim())) {
        alert("El teléfono debe tener el formato +56912345678");
        fono.focus();
        return;
    }
    formulario.submit();

});