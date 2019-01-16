//Mostramos la calculadora por pantalla.
window.onload = function(){
   pantalla=document.getElementById("textoPantalla");
   document.onkeydown = teclado;
}

//Variables inicializadas para su ejecución en futuras functions.
x="0";
xi=1;
coma=0;
ni=0;
op="no";
    
//Función que muestra el número seleccionado por pantalla.
function numero(xx) {
   if(x=="0" || xi==1) {
      pantalla.innerHTML=xx;
      x=xx;
      //Sentencia if que muestra la coma flotante si se selecciona.
      if(xx==".") {
         pantalla.innerHTML="0.";
         x=xx;
         coma=1;
      }
   }
   else {
      if (xx=="." && coma==0) {
         pantalla.innerHTML+=xx;
         x+=xx;
         coma=1;
      }
      //Controlamos que no se escriba una segunda coma flotante.
      else if (xx=="." && coma==1) {

      } 
      else {
         pantalla.innerHTML+=xx;
         x+=xx;
      }
   }
   xi=0;
}

//Función que controla las operaciones en curso y las que están por realizar.
function operar(s) {
   igualar();
   ni=x;
   op=s;
   xi=1;
}	

//Resolvemos la operación en cuestión y se muestra por pantalla.
function igualar() {
   if (op=="no") {
      pantalla.innerHTML=x;
   }
   else {
      sl=ni+op+x;
      sol=eval(sl);
      pantalla.innerHTML=sol;
      x=sol;
      op="no";
      xi=1;
   }
}

//Función que resuelve la raíz cuadrada.
function raizc() {
   x=Math.sqrt(x);
   pantalla.innerHTML=x;
   op="no";
   xi=1;
}

//Función que calcula el porcentaje de un número dividiendo entre 100.
function porcent() { 
   x=x/100;
   pantalla.innerHTML=x;
   igualar();
   xi=1;
}

//Función que cambia el signo al número en pantalla.
function opuest() { 
   nx=Number(x);
   nx=-nx;
   x=String(nx);
   pantalla.innerHTML=x;
}

function inve() {
   nx=Number(x);
   nx=(1/nx);
   x=String(nx);		 
   pantalla.innerHTML=x;
   xi=1;
}

//Función que borra el número situado en última posición al pulsar la tecla 'Retr'.
function retro(){
   cifras=x.length;
   br=x.substr(cifras-1,cifras);
   x=x.substr(0,cifras-1);
   if (x=="") {
      x="0";
   }
   if (br==".") {
      coma=0;
   }
   pantalla.innerHTML=x;
}

//Borra la pantalla de manera parcial al pulsar la tecla 'C'.
function borradoParcial() {
   pantalla.innerHTML=0;
   x=0;
   coma=0;
}

//Borra la pantalla de manera total al pulsar la tecla 'CE'.
function borradoTotal() {
   pantalla.innerHTML=0;
   x="0";
   coma=0;
   ni=0;
   op="no";
}

//Función que detecta las teclas presionadas y las representa por pantalla.
function teclado (elEvento) { 
   evento = elEvento || window.event;
   k=evento.keyCode;

   //Teclas númericas del teclado alfamunérico
   if (k>47 && k<58) { 
      p=k-48;
      p=String(p);
      numero(p);
   }	
   //Teclas del teclado númerico.
   if (k>95 && k<106) {
      p=k-96;
      p=String(p);
      numero(p);
   }

   //A continuación mostramos una sucesión de sentecias if en función de la tecla pulsada para las operaciones.
   if (k==110 || k==190) {
      numero(".");
   }
   if (k==106) {
      operar('*');
   }
   if (k==107) {
      operar('+');
   }
   if (k==109) {
      operar('-');
   }
   if (k==111) {
      operar('/');
   }
   if (k==32 || k==13) {
      igualar();
   }
   if (k==46) {
      borradoTotal();
   }
   if (k==8) {
      retro();
   }
   if (k==36) {
      borradoParcial();
   }
}