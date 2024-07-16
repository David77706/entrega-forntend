function limpiar(){
  document.getElementById("usuario").value="";
  document.getElementById("password").value="";
  document.getElementById("correo").value="";
  
}
  
document.addEventListener("DOMContentLoaded", () => {
    const form=document.querySelector("#registrar");
    const errorMessage = document.querySelector("#error-ingreso");
    
    form.addEventListener("submit", async(e,f) => {
      e.preventDefault();
      
      
      const nombre= form.usuario.value;
      const clave = form.password.value;
      const correo = form.correo.value;
     
      // realizar las validaciones
      if (nombre.trim() === "" || clave.trim() === "") {
        
        errorMessage.textContent = "Por favor ingrese el usuario y el password";
        const responsive= await fetch("http://localhost:8080/cliente",{method:"get"});
        personajes= await responsive.json();
        
        console.log(personajes);
        
        return;
      }
     
      
    // creo una constante con la direccion  del servidor 
      const url = "http://localhost:8080/cliente";
    
      //genero el json
     
      const userNew = {
          nombre,
          clave,
          correo,
      };

      
      
    
      //genero la comunicacion con el servidor.

      const response = await fetch(url, {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(userNew)
    })
    
      const responsive= await fetch(url,{method:"get"});
      personajes= await responsive.json();
      
     

    //consfirmo que se creo el usuario   
       if(response.ok) {

        errorMessage.textContent="USUARIO CREADO ...";
        limpiar();
       

    }else {
        errorMessage.textContent="Error al crear el usuario ...";
    }
     
    }
    //genero una variable 
    
      
     


        //window.location.href = "iniciosesion.html";
      
    );

});
