//-----------------AJAX-----------------

//Petición con GET
peticion = new XMLHttpRequest();//Se crea objeto XHR
peticion.open('GET',"URL?nombre=Iago&apellidos=Alonso");//Método,petición a URL con datos
peticion.send();//Se envía la petición

//Petición con POST
peticion = new XMLHttpRequest();//Se crea objeto XHR
peticion.open('POST', "URL");//Método, URL destino
peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//Cabecera
peticion.send("nombre=Federico&apellidos=Gómez");//Parámetros a pasar

//Recepción de XML
let datos=peticion.responseXML
//Recepción de JSON
let datos=JSON.parse(peticion.responseText);


//-----------------JQuery-----------------

$().ready( //Cuando esté cargada la página 
    () => { $("selector_CSS").propiedad-valor} //Se ejecuta la función. Selecciona un elemento y le modifica alguna propiedad
);

//Función ajax

$(()=>{//Cuando la página esté cargada
    $.ajax({//Función ajax de JQuery
        url:'URL',//URL de destino
        type:'GET',//GET o POST. Método de consulta
        async:true,//True para asíncrono, false para síncrono
        success:(respuesta)=>{//Función que se ejecuta si respuesta tuvo éxito
            $("selector_CSS").load("URL")
        }
    });
});


//Método load
success:(respuesta)=>{//Función que se ejecuta si respuesta tuvo éxito
    $("selector_CSS").load("URL")//Cargar los datos en un div
}

//Método post
$().ready(() => { //Cuando esté cargada la página 
        $.post(//Petición post
            "URL de destino",//URL de destino
            function nombreFuncion(respuesta){}//Función que se ejecuta si respuesta tuvo éxito
        )
    } 
);
//Método get

//Método getJson

