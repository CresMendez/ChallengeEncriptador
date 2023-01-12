
var btnEncriptar=document.getElementById("btnEncriptar");
var btnDesencriptar=document.getElementById("btnDesencriptar");
var btnCopy=document.getElementById("botonCopiar");


var arregloVoc=["e","i","a","o","u"];
var arregloclaves=["enter","imes","ai","ober","ufat"];
var arregloLong=[5,4,2,4,4];


//var aux=false;
function encriptar (){
    var textosalida;
    var arreglo=[];
    var arrEncriptado=[];

    var areaTexto=document.getElementById("txtEncriptar"); //getElementById("txtEncriptar");
        arreglo=areaTexto.value;

    for(var i=0; i<arreglo.length; i++){//gato
       var aux = false;
        if(arreglo[i]=="e"){
            arrEncriptado.push('enter');
            aux=true;
           // console.log("e");
        }
        else if(arreglo[i]=="i"){
            arrEncriptado.push('imes');
            aux=true;
            //console.log("i");
        }
        else if(arreglo[i]=="a"){
            arrEncriptado.push('ai');
            aux=true;
            //console.log("a");
        }
        else if(arreglo[i]=="o"){
            arrEncriptado.push('ober');
            aux=true;
            //console.log("o");
        }
        else if(arreglo[i]=="u"){
            arrEncriptado.push('ufat');
            aux=true;
            //console.log("u");
        }    
        if(aux==false){
            arrEncriptado.push(arreglo[i]);
            aux=false;
        }
       
    }

        estilosTxtSalida();
    var encriptado=arrEncriptado.join("");
        textosalida = document.getElementById("resultado");
        textosalida.innerHTML=encriptado;
        console.log(encriptado);
        
}

//funcion donde se reemplaza las palabras claves a vocales
function palabras(posicion, palabraclave, vocal, longitudPalabra, cadena){
     while (posicion >= 0)
 {
     cadena = cadena.slice(0, posicion) + vocal + cadena.slice(posicion + longitudPalabra);
     posicion = cadena.indexOf(palabraclave);
 }
 return cadena;
 }

//funcion desencriptar , ciclo para limpiar el texto, llamando a la funcion palabras
function desencriptar(){
    var areaTexto=document.getElementById("txtEncriptar");
    var cadena = areaTexto.value;

    var nuevacadena="";
    var posicion=0;
    for(var j = 0; j<arregloclaves.length; j++){
         posicion = cadena.indexOf(arregloclaves[j]);//posicion
         if(posicion>0){         
            nuevacadena=palabras(posicion, arregloclaves[j], arregloVoc[j], arregloLong[j], cadena);     
            cadena=nuevacadena;     
         }

    }      
        estilosTxtSalida();
    let textosalidades = document.getElementById("resultado");
        textosalidades.innerHTML=nuevacadena;
        console.log(nuevacadena); 
}

function divTexto(){

    if(!document.getElementById("divtext")){
        
    let txtsal=document.getElementById("txtsalida");
    let btn=document.createElement("p");
        btn.classList.add("divtext");
        btn.setAttribute("id", "divtext");
       txtsal.appendChild(btn);
    }

}

function estilosTxtSalida(){


    document.getElementById("muneco").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").style.display="none";
    document.getElementById("botonCopiar").style.visibility="visible";
    document.getElementById("botonCopiar").style.display="inline";
    document.getElementById("txtsalida").style.display="flex";
    document.getElementById("txtsalida").style.flexDirection= "column-reverse";
    document.getElementById("txtsalida").style.justifyContent= "space-between";

}

function copiarAlPortapapeles() {

    var enlace = document.getElementById("resultado");
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", enlace.textContent);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
    alert("Copiado al portapapeles!");
  }


//evento de los botones encriptar y desencriptar
btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
//otra forma de usar eventos
btnCopy.addEventListener("click", copiarAlPortapapeles);




























//btnCopy.addEventListener("click", copy);
/*
function copiaResultado() {
    let copyText = document.querySelector("#resultado");//mi etiqueta p
    copyText.select();
    document.execCommand("copy");
    alert("Copiado: " + copyText.value);
}
*/

//boton.addEventListener("click", copiarAlPortapapeles, false);



/*


function copys(){
    var content = document.querySelector("#txtsalida");
    content.select()
    document.execCommand("copy");
    Swal.fire(
      'Copiado!',
      'El contenido se encuentra en su papelera',
      'success'
    )
  }

function copiar(){
   var  ingresarTexto = document.querySelector('#txtsalida');
    ingresarTexto.value= msg.value;
    navigator.clipboard.writeText(msg.value);
    ingresarTexto.focus();
    proceder = true;
    document.querySelector("label").style.color = "#fc0";

}
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} */





































// esta es la frase original
//var cadena = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
/*var cadena ='hoberlai mufatndober'; */
// encuentra la primer posición de "ato"
/*var posicion = cadena.indexOf("ai");*/

//console.log("hola mundo nueva palabra "+palabras(posicion,"ai", "a", 2, cadena));

/*var nuevotext=palabras(posicion,"ai", "a", 2, cadena);
console.log("nuevo "+nuevotext);*/
/*var posicion = cadena.indexOf("ober");
console.log("hola mundo nueva palabra "+palabras(posicion,"ober", "o", 4, cadena));/
//var nnuevacadena=palabras(1, arregloclaves[j], arregloVoc[j], arregloLong[j], cadena);  */ 
//console.log("tt "+nnuevacadena);  
/**
 * 
 var arregloVoc=["e","i","a","o","u"];
var arregloclaves=["enter","imes","ai","ober","ufat"];
var arregloLong=[5,4,2,4,4];
 */
/*
var nuevacadena="";
var posicion=0;
for(var j = 0; j<arregloclaves.length; j++){
     posicion = cadena.indexOf(arregloclaves[j]);//posicion
     if(posicion>0){
        
        nuevacadena=palabras(posicion, arregloclaves[j], arregloVoc[j], arregloLong[j], cadena);     
        //console.log( posicion, arregloclaves[j], arregloVoc[j] , arregloLong[j], cadena);   
        cadena=nuevacadena;  
        //nuevacadena=cadena; 
        
     }
    // console.log("forrr if "+nuevacadena); 
}      
console.log("Holo "+nuevacadena);

*/
// y mientras tengas una posición mayor o igual que 0,
// (recuerda que -1 significa que no lo encontró)
//console.log("posicion "+posicion);
/*
while (posicion >= 0)
{
    // remplaza "ato" por "atito"
    cadena = cadena.slice(0, posicion) + "a" + cadena.slice(posicion + 2);
    // busca la siguiente ocurrencia de la palabra
    posicion = cadena.indexOf("ai");
    console.log("posicion "+posicion);
}*/
//console.log("pruebas palabras "+cadena);
/////*
/*
function palabras(posicion, palabraclave, vocal, longitudPalabra, cadena){
   // console.log(posicion, palabraclave, vocal, longitudPalabra, cadena);
  //  1 'ai' 'a' 2 'gaitober'
    while (posicion >= 0)
{
    // remplaza "ober" por "o"
    //remplaza "ai" por "a"                                              posicion es 1
    //gaitober = gaitober extrae->           "g"+     "a"  +    gatober = estrae -> tober          final gatober
   //console.log("prueba: "+ cadena.slice(0, posicion), vocal , cadena.slice(posicion + longitudPalabra));
    cadena = cadena.slice(0, posicion) + vocal + cadena.slice(posicion + longitudPalabra);
   // console.log("prueba: "+ cadena.slice(0, posicion), vocal , cadena.slice(posicion + longitudPalabra));
   //console.log(cadena);
    // busca la siguiente ocurrencia de la palabra
    posicion = cadena.indexOf(palabraclave);
    //console.log("posicion "+posicion);
}
return cadena;
}
*/
/*

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

Por ejemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`

- La página debe tener campos para 
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.
*/