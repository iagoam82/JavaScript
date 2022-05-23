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
}

document.addEventListener("DOMContentLoaded",ready);
function ready(){
    document.getElementById("boton").addEventListener("click",mostrar);
}

function mostrar(){
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
    a1.classList.add("aula");piso1.appendChild(a1);
    let a2=document.createElement("div");
    a2.id="a2";
    a2.classList.add("aula");piso1.appendChild(a2);
    let a3=document.createElement("div");
    a3.id="a3";
    a3.classList.add("aula");piso1.appendChild(a3);

    //Creo 3 divs (a4, a5, a6) les doy atributos y los cuelgo del div piso2
    let a4=document.createElement("div");
    a4.id="a4";
    a4.classList.add("aula");piso2.appendChild(a4);
    let a5=document.createElement("div");
    a5.id="a5";
    a5.classList.add("aula");piso2.appendChild(a5);
    let a6=document.createElement("div");
    a6.id="a6";
    a6.classList.add("aula");piso2.appendChild(a6);

    //Creo 6 divs (head1~6), les doy atributos, y los cuelgo de cada div a1~6
    let head1=document.createElement("div");
    head1.id="head1";
    head1.classList.add("letrero");
    a1.appendChild(head1);
    let head2=document.createElement("div");
    head2.id="head2";
    head2.classList.add("letrero");
    a2.appendChild(head2);
    let head3=document.createElement("div");
    head3.id="head3";
    head3.classList.add("letrero");
    a3.appendChild(head3);
    let head4=document.createElement("div");
    head4.id="head4";
    head4.classList.add("letrero");
    a4.appendChild(head4);
    let head5=document.createElement("div");
    head5.id="head5";
    head5.classList.add("letrero");
    a5.appendChild(head5);
    let head6=document.createElement("div");
    head6.id="head6";
    head6.classList.add("letrero");
    a6.appendChild(head6);
    
    //Creo 6 divs (datos1~6), les doy atributos, y los cuelgo de cada div a1~6
    let datos1=document.createElement("div");
    datos1.id="datos1";
    datos1.classList.add("datos","contenido");
    a1.appendChild(datos1);
    let datos2=document.createElement("div");
    datos2.id="datos2";
    datos2.classList.add("datos","contenido");
    a2.appendChild(datos2);
    let datos3=document.createElement("div");
    datos3.id="datos3";
    datos3.classList.add("datos","contenido");
    a3.appendChild(datos3);
    let datos4=document.createElement("div");
    datos4.id="datos4";
    datos4.classList.add("datos","contenido");
    a4.appendChild(datos4);
    let datos5=document.createElement("div");
    datos5.id="datos5";
    datos5.classList.add("datos","contenido");
    a5.appendChild(datos5);
    let datos6=document.createElement("div");
    datos6.id="datos6";
    datos6.classList.add("datos","contenido");
    a6.appendChild(datos6);

    //Creo 6 aulas
    let aula1=new Aula(1,1,25);
    let aula2=new Aula(2,1,17);
    let aula3=new Aula(3,1,21);
    let aula4=new Aula(4,2,20);
    let aula5=new Aula(5,2,32);
    let aula6=new Aula(6,2,15);

    //Pinto los números de las aulas
    head1.innerHTML="Aula Nº"+aula1.getNumero();
    head2.innerHTML="Aula Nº"+aula2.getNumero();
    head3.innerHTML="Aula Nº"+aula3.getNumero();
    head4.innerHTML="Aula Nº"+aula4.getNumero();
    head5.innerHTML="Aula Nº"+aula5.getNumero();
    head6.innerHTML="Aula Nº"+aula6.getNumero();

    //Creo 8 alumnos
    let alumno1=new Alumno("Javier", "Sánchez", "javi@dwec.com");
    let alumno2=new Alumno("Uxía", "Martinez", "uxia@dwec.com");
    let alumno3=new Alumno("Ana", "Pérez", "ana@dwec.com");
    let alumno4=new Alumno("Enrique", "Álvarez", "Enrique@dwec.com");
    let alumno5=new Alumno("Jose", "Bolaño", "Jose@dwec.com");
    let alumno6=new Alumno("Jacobo", "Taboada", "Jacobo@dwec.com");
    let alumno7=new Alumno("Almudena", "Alonso", "Almudena@dwec.com");
    let alumno8=new Alumno("María", " Robles", "María@dwec.com");

    //Creo 6 arrays para meter a las aulas los alumnos
    let clase1=[alumno1, alumno2, alumno3];
    let clase2=[alumno4, alumno5];
    let clase3=[];
    let clase4=[alumno6,alumno7];
    let clase5=[];
    let clase6=[alumno8];

    //Pinto los alumnos en su aula
    for(let i=0; i<clase1.length; i++){
        datos1.innerHTML+=clase1[i].getNombre() + " " + clase1[i].getApellido() + "<br>";
    }
    for(let i=0; i<clase2.length; i++){
        datos2.innerHTML+=clase2[i].getNombre() + " " + clase2[i].getApellido() + "<br>";
    }
    for(let i=0; i<clase3.length; i++){
        datos3.innerHTML+=clase3[i].getNombre() + " " + clase3[i].getApellido() + "<br>";
    }
    for(let i=0; i<clase4.length; i++){
        datos4.innerHTML+=clase4[i].getNombre() + " " + clase4[i].getApellido() + "<br>";
    }
    for(let i=0; i<clase5.length; i++){
        datos5.innerHTML+=clase5[i].getNombre() + " " + clase5[i].getApellido() + "<br>";
    }
    for(let i=0; i<clase6.length; i++){
        datos6.innerHTML+=clase6[i].getNombre() + " " + clase6[i].getApellido() + "<br>";
    } 
}
