
document.addEventListener("DOMContentLoaded", () => {
    const form=document.querySelector("#inicio-sesion");
    const errorMessage = document.querySelector("#error-ingreso");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      
      const usuario = form.usuario.value;
      const password = form.password.value;
      if (usuario.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Por favor ingrese el usuario y el password";
        return;
      }
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.usuario === usuario && user.password===password);
       
       if (existingUser) {
             
            window.location.href = "carrito.html";
        }
        else{
          errorMessage.textContent="no coinciden usuario o contraseña";
        }
        
      });   
});



