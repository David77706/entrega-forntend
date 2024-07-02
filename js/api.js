//genero las tarjetas de presentacion. debo generar un constructor para poder conectar al DOm.
function insertarCard(personaje, i, personajes) {
  console.log(personaje);
  const card = cargartarjetas(personaje);
  renderizarCard(card);


}

//1-genero un array
 let personajes;
 //genero una funcion contructora donde van a tener parametros 

function cargartarjetas(personaje){
  const creidcard=document.createElement("div");
   creidcard.classList.add("card");
   
  creidcard.innerHTML= `
  <img src=${personaje.image} /> 
  <h2>${ personaje.name}</h2>
  <p> ${personaje.species}</p>`;
  
return creidcard;

}




function renderizarCard(card){
  const container = document.querySelector("#container");
  container.appendChild(card);
}



//por ultimo recorrer los datos y mostrarlos 




//genero una variable 
async function consulta(){
     const responsive= await fetch('https://rickandmortyapi.com/api/character');
     personajes= await responsive.json();
     mostrarPorPantalla(personajes);
}
 
function mostrarPorPantalla(personajes) {

  console.log(personajes)
  personajes.results.forEach(insertarCard);
 
}
 consulta();

 //cargartarjetas();

      