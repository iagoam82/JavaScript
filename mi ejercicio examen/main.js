//Clase Aula
class Aula{

    //Constructor para la clase
    constructor(numero, piso, capacidad){
        this.numero=numero;
        this.piso=piso;
        this.capacidad=capacidad;
    }
    //Getters
    getNumero(){
        return this.numero;
    }
    getPiso(){
        return this.piso;
    }
    getCapacidad(){
        return this.capacidad;
    }
    //Setters
    setNumero(numero){
        this.numero=numero;
    }
    setPiso(piso){
        this.piso=piso;
    }
    setcapacidad(capacidad){
        this.capacidad=capacidad;
    }
    /*Método para crear aulas
    Recibe numero, piso y capacidad
    Devuelve un objeto Aula*/
    crearAula(n,p,c){
        let aula=new Aula(n,p,c);
        return aula;
    }
}
//Clase Alumno
class Alumno{

    //Constructor para la clase
    constructor(nombre, apellido, email){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
    }
    //Getters
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getEmail(){
        return this.email;
    }
    //Setters
    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setEmail(email){
        this.email=email;
    }
    /*Método para crear alumnos
    Recibe nombe, apellido y email
    Devuelve un objeto Alumno*/
    crearAlumno(n,a,e){
        let alumno=new Alumno(n,a,e);
        return alumno;
    }
}

document.addEventListener("DOMContentLoaded",ready);
function ready(){
    document.getElementById("boton").addEventListener("click",mostrar);
}

function mostrar(){
    //let body=document.getElementsByTagName("body")[0];
    //Recupero el div marco y le asigno estilos
    let marco=document.getElementById("marco");
    marco.style.marginTop="margin-top:5px";
    marco.style.border="solid 2px grey";
    marco.style.width="620px";
    marco.style.height="620px";

    //Creo div piso2, le asigno atributos y lo cuelgo del div marco
    let piso2=document.createElement("div");
    piso2.id="piso2";
    piso2.style.display="flex";
    marco.appendChild(piso2);

    //Creo div piso1, le asigno atributos y lo cuelgo del div marco
    let piso1=document.createElement("div");
    piso1.id="piso1";
    piso1.style.display="flex";
    marco.appendChild(piso1);

    //Creo 3 divs (a1, a2, a3) les doy atributos y los cuelgo del div piso1
    let a1=document.createElement("div");
    a1.id="a1";
    a1.style.backgroundColor="bisque";
    a1.style.margin="5px";
    a1.style.border="2px solid black";
    a1.style.width="200px";
    a1.style.height="200px";
    piso1.appendChild(a1);

    let a2=document.createElement("div");
    a2.id="a2";
    a2.style.backgroundColor="bisque";
    a2.style.margin="5px";
    a2.style.border="2px solid black";
    a2.style.width="200px";
    a2.style.height="200px";
    piso1.appendChild(a2);

    let a3=document.createElement("div");
    a3.id="a3";
    a3.style.backgroundColor="bisque";
    a3.style.margin="5px";
    a3.style.border="2px solid black";
    a3.style.width="200px";
    a3.style.height="200px";
    piso1.appendChild(a3);

    //Creo 3 divs (a4, a5, a6) les doy atributos y los cuelgo del div piso2
    let a4=document.createElement("div");
    a4.id="a4";
    a4.style.backgroundColor="bisque";
    a4.style.margin="5px";
    a4.style.border="2px solid black";
    a4.style.width="200px";
    a4.style.height="200px";
    piso2.appendChild(a4);

    let a5=document.createElement("div");
    a5.id="a5";
    a5.style.backgroundColor="bisque";
    a5.style.margin="5px";
    a5.style.border="2px solid black";
    a5.style.width="200px";
    a5.style.height="200px";
    piso2.appendChild(a5);

    let a6=document.createElement("div");
    a6.id="a6";
    a6.style.backgroundColor="bisque";
    a6.style.margin="5px";
    a6.style.border="2px solid black";
    a6.style.width="200px";
    a6.style.height="200px";
    piso2.appendChild(a6);

    //Creo 6 divs (head1~6), les doy atributos, y los cuelgo de cada div a1~6
    let head1=document.createElement("div");
    head1.id="head1";
    head1.style.backgroundColor="darkgoldenrod";
    head1.style.margin="3px";
    head1.style.border="2px solid black";
    head1.style.width="180px";
    head1.style.height="20px";
    //head1.innerHTML="Aula 1";
    head1.style.fontFamily="arial black";
    head1.style.textAlign="center";
    a1.appendChild(head1);

    let head2=document.createElement("div");
    head2.id="head2";
    head2.style.backgroundColor="darkgoldenrod";
    head2.style.margin="3px";
    head2.style.border="2px solid black";
    head2.style.width="180px";
    head2.style.height="20px";
    //head2.innerHTML="Aula 2";
    head2.style.fontFamily="arial black";
    head2.style.textAlign="center";
    a2.appendChild(head2);

    let head3=document.createElement("div");
    head3.id="head3";
    head3.style.backgroundColor="darkgoldenrod";
    head3.style.margin="3px";
    head3.style.border="2px solid black";
    head3.style.width="180px";
    head3.style.height="20px";
    //head3.innerHTML="Aula 3";
    head3.style.fontFamily="arial black";
    head3.style.textAlign="center";
    a3.appendChild(head3);

    let head4=document.createElement("div");
    head4.id="head4";
    head4.style.backgroundColor="darkgoldenrod";
    head4.style.margin="3px";
    head4.style.border="2px solid black";
    head4.style.width="180px";
    head4.style.height="20px";
    //head4.innerHTML="Aula 4";
    head4.style.fontFamily="arial black";
    head4.style.textAlign="center";
    a4.appendChild(head4);

    let head5=document.createElement("div");
    head5.id="head5";
    head5.style.backgroundColor="darkgoldenrod";
    head5.style.margin="3px";
    head5.style.border="2px solid black";
    head5.style.width="180px";
    head5.style.height="20px";
    //head5.innerHTML="Aula 5";
    head5.style.fontFamily="arial black";
    head5.style.textAlign="center";
    a5.appendChild(head5);
    
    let head6=document.createElement("div");
    head6.id="head6";
    head6.style.backgroundColor="darkgoldenrod";
    head6.style.margin="3px";
    head6.style.border="2px solid black";
    head6.style.width="180px";
    head6.style.height="20px";
    //head6.innerHTML="Aula 6";
    head6.style.fontFamily="arial black";
    head6.style.textAlign="center";
    a6.appendChild(head6);
    
    //Creo 6 divs (datos1~6), les doy atributos, y los cuelgo de cada div a1~6
    let datos1=document.createElement("div");
    datos1.id="datos1";
    datos1.style.backgroundColor="white";
    datos1.style.margin="3px";
    datos1.style.border="2px solid black";
    datos1.style.width="180px";
    datos1.style.height="160px";
    datos1.style.fontFamily="verdana";
    a1.appendChild(datos1);

    let datos2=document.createElement("div");
    datos2.id="datos2";
    datos2.style.backgroundColor="white";
    datos2.style.margin="3px";
    datos2.style.border="2px solid black";
    datos2.style.width="180px";
    datos2.style.height="160px";
    datos2.style.fontFamily="verdana";
    a2.appendChild(datos2);
    
    let datos3=document.createElement("div");
    datos3.id="datos3";
    datos3.style.backgroundColor="white";
    datos3.style.margin="3px";
    datos3.style.border="2px solid black";
    datos3.style.width="180px";
    datos3.style.height="160px";
    datos3.style.fontFamily="verdana";
    a3.appendChild(datos3);

    let datos4=document.createElement("div");
    datos4.id="datos4";
    datos4.style.backgroundColor="white";
    datos4.style.margin="3px";
    datos4.style.border="2px solid black";
    datos4.style.width="180px";
    datos4.style.height="160px";
    datos4.style.fontFamily="verdana";
    a4.appendChild(datos4);

    let datos5=document.createElement("div");
    datos5.id="datos5";
    datos5.style.backgroundColor="white";
    datos5.style.margin="3px";
    datos5.style.border="2px solid black";
    datos5.style.width="180px";
    datos5.style.height="160px";
    datos5.style.fontFamily="verdana";
    a5.appendChild(datos5);

    let datos6=document.createElement("div");
    datos6.id="datos6";
    datos6.style.backgroundColor="white";
    datos6.style.margin="3px";
    datos6.style.border="2px solid black";
    datos6.style.width="180px";
    datos6.style.height="160px";
    datos6.style.fontFamily="verdana";
    a6.appendChild(datos6);
//----------------------------------------Desde aqui no funciona, no crea las aulas ni los alumnos al no reconocer los métodos de sendas clases
//----------------------------------------main.js:294 Uncaught TypeError: Aula.crearAula is not a function
    //Creo 6 aulas
    let aula1=Aula.crearAula(1,1,25);
    let aula2=Aula.crearAula(2,1,17);
    let aula3=Aula.crearAula(3,1,21);
    let aula4=Aula.crearAula(4,2,20);
    let aula5=Aula.crearAula(5,2,32);
    let aula6=Aula.crearAula(6,2,15);

    //Pinto los números de las aulas
    head1.innerHTML="Aula Nº"+aula1.getNumero();
    head2.innerHTML="Aula Nº"+aula2.getNumero();
    head3.innerHTML="Aula Nº"+aula3.getNumero();
    head4.innerHTML="Aula Nº"+aula4.getNumero();
    head5.innerHTML="Aula Nº"+aula5.getNumero();
    head6.innerHTML="Aula Nº"+aula6.getNumero();


    //Creo 8 alumnos
    let alumno1=Alumno.crearAlumno("Javier", "Sanchez", "javi@dwec.com");
    let alumno2=Alumno.crearAlumno("Uxía", "Martinez", "uxia@dwec.com");
    let alumno3=Alumno.crearAlumno("Ana", "Pérez", "ana@dwec.com");
    let alumno4=Alumno.crearAlumno("Enrique", "Álvarez", "Enrique@dwec.com");
    let alumno5=Alumno.crearAlumno("Jose", "Bolaño", "Jose@dwec.com");
    let alumno6=Alumno.crearAlumno("Jacobo", "Taboada", "Jacobo@dwec.com");
    let alumno7=Alumno.crearAlumno("Almudena", "Alonso", "Almudena@dwec.com");
    let alumno8=Alumno.crearAlumno("María", " Robles", "María@dwec.com");

    //Creo 6 arrays para meter a las aulas los alumnos
    let clase1=[alumno1, alumno2, alumno3];
    let clase2=[alumno4, alumno5];
    let clase3=[];
    let clase4=[alumno6,alumno7];
    let clase5=[];
    let clase6=[alumno8];

    //Pinto los alumnos en su aula
    datos1.innerHTML=clase1;
    datos2.innerHTML=clase2;
    datos3.innerHTML=clase3;
    datos4.innerHTML=clase4;
    datos5.innerHTML=clase5;
    datos6.innerHTML=clase6;      
}
