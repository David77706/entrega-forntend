// funcion para limpiar
function limpiar(){
    document.getElementById("usuario").value="";
    document.getElementById("password").value="";
    //document.getElementById("correo").value="";
    document.getElementById("error-ingreso").value="";
  }
  //buscar usuario
   const list=JSON.parse(localStorage.getItem("users"));
   console.log(list);
  

   
    
  document.addEventListener("DOMContentLoaded", () => {
      const form=document.querySelector("#registrar");
      const errorMessage = document.querySelector("#error-ingreso");
      
      form.addEventListener("submit", (e,f) => {
        e.preventDefault();
        
        
        const usuario = form.usuario.value;
        const password = form.password.value;
        
        
        // realizar las validacion de campos vacios 
        if (usuario.trim() === "" || password.trim() === "") {
          errorMessage.textContent = "Por favor ingrese el usuario y el password";
          
          return;
        }
       
        
        // simulacion de bd: guardar en el localstorage
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => user.usuario === usuario);
        console.log(users);
        //modifico el usuario
       if (existingUser) {
          //reemplazo el valor anterior
          existingUser.password= password;
          //grabo el valor 
          

          //console.log(password);
          limpiar();

      
         //users.push(password);
         localStorage.setItem("users", JSON.stringify(users));  
          
         errorMessage.textContent="Sea Modificado el Password";
          return;
        }

        
      });
    });