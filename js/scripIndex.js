let nombre=document.getElementById("nombre");
let email=document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function(event){
    event.preventDefault();//detiene el envio
    
    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)){
        alert("el nombre debe contener solo letras");
        nombre.focus();
        return;
    }
      if(!/^[^\s@]+@(gmail|outlook)\.com$/i.test(email.value)){
        alert("el mail no tiene el formato correcto (usuario@gmail.com) o (usuario@outlook.com).")
        email.focus();
        return;
    }
    if(mensaje.value.trim().length < 10){
        event.preventDefault();
        alert("El mensaje no puede estar vacío y debe tener al menos 10 caracteres.");
        mensaje.focus();
        return;
    }
    alert("¡Formulario enviado exitosamente!"); // Le avisa al usuario
    formulario.reset();
});