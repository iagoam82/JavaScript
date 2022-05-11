//Funcion iniciar al cargar la página
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  //Evento click con función peti en el boton con id=btn
  document.getElementById("btn").addEventListener("click", peti);
}

function peti() {
 
  $(function(){
    //LLamada con JQuery función $.getJSON()
    $.getJSON(
      //URL del sitio
      'https://reqres.in/api/users?page=2',
      // Función para recoger los datos
      function mostrar(respuesta) {
        //Recorro los datos de la respuesta
          for (let i = 0; i < respuesta.data.length; i++) {
          //A cada dato le llamo paisa
          let paisa = respuesta.data[i];
          //Creo una caja y le añado la clase .retrato
          let box = document.createElement("div");
          box.classList.add("retrato");
          //Creo un elemento imagen y le añado el atributo src con el .avatar del dato
          let img = document.createElement("img");
          img.setAttribute("src", paisa.avatar);
          //Creo un elemento parrafo y le escribo el first_name y el last_name del dato
          let nombre = document.createElement("p");
          nombre.innerHTML = paisa.first_name + " " + paisa.last_name;
          //Creo un elemento parrafo y le escribo el email del dato
          let email = document.createElement("p");
          email.innerHTML = paisa.email;
          //Añado los elementos al elemento div 
          box.appendChild(img);
          box.appendChild(nombre);
          box.appendChild(email);
          //Añado el elemnto box a datos
          document.getElementById("datos").appendChild(box);
          }	      
      }
  );
});
}


//-----OTRA MANERA, FUNCIONA IGUAL------
/*
 //LLamada JQuery con función getJSON()
  $().ready(() => {
    $.getJSON(
      "https://reqres.in/api/users?page=2",
      function (respuesta) {
        for (let i = 0; i < respuesta.data.length; i++) {
          //A cada dato le llamo paisa
          let paisa = respuesta.data[i];
          //Creo una caja y le añado la clase .retrato
          let box = document.createElement("div");
          box.classList.add("retrato");
          //Creo un elemento imagen y le añado el atributo src con el .avatar del dato
          let img = document.createElement("img");
          img.setAttribute("src", paisa.avatar);
          //Creo un elemento parrafo y le escribo el first_name y el last_name del dato
          let nombre = document.createElement("p");
          nombre.innerHTML = paisa.first_name + " " + paisa.last_name;
          //Creo un elemento parrafo y le escribo el email del dato
          let email = document.createElement("p");
          email.innerHTML = paisa.email;
          //Añado los elementos al elemento div 
          box.appendChild(img);
          box.appendChild(nombre);
          box.appendChild(email);
          //Añado el elemnto box a datos
          document.getElementById("datos").appendChild(box);
        }
      }
    );
  });
*/