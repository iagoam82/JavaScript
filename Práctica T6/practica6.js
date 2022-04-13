//Variable global tamaño máximo de cada tabla
TAMANHOTABLA = 30

//Espera a que esté cargada la página
document.addEventListener("DOMContentLoaded",ready)

//Función principal que llama a otras funciones
function ready(){
    //Genera el tablero y el cambio de color sin evento, al empezar
    generarTablaDibujo()
    generarEventosCambioColor()

    //Recorro las celdas y les asigno  evento de click y mouseover
    let celdas=document.getElementsByClassName("tablerodibujo")
    celdas=celdas[0].getElementsByTagName("td")
    for (let i=0;i<celdas.length;i++){
        celdas[i].addEventListener("click",pincelOnOff)
        celdas[i].addEventListener("mouseover",pintar)
    }
}

function generarTablaDibujo(){
    //accedo al div zonadibujo
    let zonaDibujo=document.getElementById("zonadibujo")

    /*le creo un elemento table
    le añado la clase tablerodibujo 
    a zonadibujo le añado un hijo table
    */
    let table=document.createElement("table")
    table.classList.add("tablerodibujo")
    zonaDibujo.appendChild(table)


    //En el primer for creo 30 filas y se las voy añadiendo como hijos a la tabla
    for(let i=0;i<TAMANHOTABLA;i++){
        let fila=document.createElement("tr")
        /*En el segundo for creo 30 columnas en cada fila 
        a cada columna de añado la clase tablerodibujo
        le asigno id a cada celda 
        añado las columnas como hijos a la fila*/
        for(let j=0;j<TAMANHOTABLA;j++){
            let col=document.createElement("td")
            col.classList.add("tablerodibujo")
            col.id="celda_"+(i*TAMANHOTABLA+j+1)
            fila.appendChild(col)
        }
        table.appendChild(fila)
    }
}

function generarEventosCambioColor(){
    /*De la paleta, recojo la fila 0 y una colección con los colores (los td) */
    let colores=document.getElementById("paleta")
    .getElementsByTagName("tr")[0]
    .getElementsByTagName("td")

    /*Añado cada color a la lista de eventos
    asignándole evento click y función cambiocolor*/
    for (let i=0;i<colores.length;i++){
       colores[i].addEventListener("click", cambioColor) 
    }
}

function cambioColor(ev){
    /*Recojo los que tengan la clase seleccionado (solo puede ser 1)
    y le quito la clase seleccionado
    al color que ha sido clickado se le añade la clase seleccionado*/
    document.getElementsByClassName("seleccionado")[0].classList.remove("seleccionado")
    ev.target.classList.add("seleccionado")
}

let pincelOn=false

function pincelOnOff(event){
    //Si el pincel está activo, al clickar se desactiva, así que le cambio el texto y lo cambio a false
    if (pincelOn){
        document.getElementById("pincel").childNodes[0].nodeValue="Pincel Desactivado"
        pincelOn=false
    }
    /*Si no está activo, al clickar se activa, asi que cambio el texto, cambio a true,
    y llamo al la función pintar pasándole el evento*/
    else{
        document.getElementById("pincel").childNodes[0].nodeValue="Pincel Activado"
        pincelOn=true
        pintar(event)
    }
    
}

function pintar(event){
    //Si el pincel stá activo, se añade la clase del color seleccionado
    if(pincelOn){let color=document.getElementsByClassName("seleccionado")[0].classList[0]
    event.target.classList.add(color)}
}