document.addEventListener("DOMContentLoaded", ready);//Espera a que esté cargada la página

function ready (){//Función con lo eventos
    document.getElementById("genTab").addEventListener("click", generarTablero);
    document.getElementById("genFich").addEventListener("click",generarFichas);
}

function generarTablero (event){
    let body=document.body;//recupero el body
    let tablero = document.createElement("div");//creo el div para el tablero

    tablero.id="tablero";//establezco una id para el tablero
    tablero.style.height="512px";
    tablero.style.width="512px";
    tablero.style.border="10px solid red";
    tablero.style.margin= "10px 10px";

    body.appendChild(tablero);//al elemento body, le creo un hijo que es tablero

    for (let i=0; i<64;i++){//recorro las 64 casillas que debe haber
        let casilla=document.createElement("div");//creo el div para cada casilla, 64 div's

        casilla.id="casilla_"+([i]+1);//establezco id para cada div (para cada casilla)
        casilla.style.height="64px";
        casilla.style.width="64px";
        casilla.style.float="left";
        casilla.style.backgroundColor=parseInt((i/8)+i)%2==0?"white":"black";

        tablero.appendChild(casilla);//al elemento tablero le creo un hijo casilla (64 veces)
    }
    event.preventDefault();//Dtengo el evento para no poder crear más tableros
    //event.stopPropagation();
    //event.stopImmediatePropagation();
}

    function generarFichas(){
        let casillas=document.getElementById("tablero").childNodes;//recupero todos los nodos (hijos) de tablero

        for(let i=0; i<64; i++){//recorro los 64 nodos
            
            if((i<24 || i>40) && parseInt((i/8)+i)%2==0){//cálculo para pintar las casillas
                let ficha=document.createElement("div");//creo el div para cada ficha

                ficha.draggable=true;//Hace que la ficha se pueda mover
                ficha.id="ficha_"+(i+1);//establezco id de cada ficha
                ficha.style.height="32px";
                ficha.style.width="32px";
                ficha.style.backgroundColor= (i<24)?"red":"blue";//si es <24, ficha es roja, si no azul
                ficha.style.float="left";
                ficha.style.margin="16px 0 0 16px";
                ficha.style.borderRadius="50px";
                casillas[i].appendChild(ficha );//a la casilla señalada, le creo un hijo ficha
            }

        }
    }
