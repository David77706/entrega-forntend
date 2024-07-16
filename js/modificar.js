// funcion para limpiar
function limpiar(){
    document.getElementById("usuario").value="";
    document.getElementById("password").value="";
    //document.getElementById("correo").value="";
    document.getElementById("error-ingreso").textContent="";
  }
  //buscar usuario
   //const list=JSON.parse(localStorage.getItem("users"));
   //console.log(list);
  

   
    
  document.addEventListener("DOMContentLoaded", () => {
      const form=document.querySelector("#registrar");
      const errorMessage = document.querySelector("#error-ingreso");
      
      form.addEventListener("submit", async(e,f) => {
        e.preventDefault();
        
        
        const usuario = form.usuario.value;
        const password = form.password.value;

        const url = "http://localhost:8080/cliente"

        
        // realizar las validacion de campos vacios 
        if (usuario.trim() === "" || password.trim() === "") {
          errorMessage.textContent = "Por favor ingrese el usuario y el password";
          //genero una variable 
           consulta()
       
          
         }
        async function  consulta(){
         const responsive= await fetch(url,{method: "post",
          headers: {"Content-Type":"application/json"},
          body: JSON.parse(userNew)});
          user= await responsive.json();
          console.log(user)

          return;
        }
      
        // simulacion de bd: guardar en el localstorage
    
        //const users = JSON.parse(localStorage.getItem("users")) || [];
        //const existingUser = users.find((user) => user.usuario === usuario);
        //const url = "http://localhost:8080/cliente"
        
        //modifico el usuario
       /*if (existingUser) {
          //reemplazo el valor anterior
          existingUser.password= password;
          //grabo el valor 
          

          //console.log(password);
          limpiar();

      
         
      
          
          //genero una variable 
          
          errorMessage.textContent("Clave modificada");*/
        
        
      });  
    });