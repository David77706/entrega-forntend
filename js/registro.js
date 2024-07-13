function limpiar(){
  document.getElementById("usuario").value="";
  document.getElementById("password").value="";
  document.getElementById("correo").value="";
  document.getElementById("error-ingreso").textContent="";
}
  
document.addEventListener("DOMContentLoaded", () => {
    const form=document.querySelector("#registrar");
    const errorMessage = document.querySelector("#error-ingreso");
    
    form.addEventListener("submit", async(e,f) => {
      e.preventDefault();
      
      
      const usuario = form.usuario.value;
      const password = form.password.value;
      const correo = form.correo.value;
      
      // realizar las validaciones
      if (usuario.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Por favor ingrese el usuario y el password";
        
        return;
      }
     
      
      // simulacion de bd: guardar en el localstorage
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.usuario === usuario);
      const url = "http://localhost:8080/cliente"
      //condicional si existe el usuario.
     if (existingUser) {
        errorMessage.textContent = "Usario ya existe, prueba con otro";
        limpiar();
        return;
      }
     
      //genero el json
     
      const userNew = {
          usuario,
          password,
          correo,
      };
      users.push(userNew);
      //genero la comunicacion con el servidor.

      const response = await fetch(url, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(users)
    })
      
        //users.push(userNew);
       // localStorage.setItem("users", JSON.stringify(users));  
       if(response.ok) {
        console.log("USUARIO CREADO ...");
        window.location.href = "iniciosesion.html";

    }else {
        console.log("Error al crear el usuario ...");
    }
        window.location.href = "iniciosesion.html";
      
    });
  });
  
