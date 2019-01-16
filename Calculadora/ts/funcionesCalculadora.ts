//Mostramos la calculadora por pantalla.
window.onload = function() {
   let pantalla = document.getElementById("textoPantalla");
   document.onkeydown = teclado;
}

//Variables inicializadas para su ejecución en futuras functions.
let x = "0";
let xi = 1;
let coma = 0;
let ni = 0;
let op = "no";

//Función que muestra el número seleccionado por pantalla.
function numero(xx): void {
   if(x == "0" || xi == 1) {
      this.pantalla.innerHTML = xx;
      x = xx;
      //Sentencia if que muestra la coma flotante si se selecciona.
      if (xx == ".") {
         this.pantalla.innerHTML = "0.";
         x = xx;
         coma = 1;
      }
   }
   else {
      if(xx == "." && coma == 0) {
         this.pantalla.innerHTML += xx;
         x += xx;
         coma = 1; 
      }
      //Controlamos que no se escriba una segunda coma flotante.
      else if (xx == "." && coma == 1) {

      } 
      else {
         this.pantalla.innerHTML += xx;
         x += xx;
      }
   }
   xi = 0;
}

//Función que controla las operaciones en curso y las que están por realizar.
function operar(s) {
   igualar();
   let ni = x;
   op = s;
   xi = 1;
}

//Resolvemos la operación en cuestión y se muestra por pantalla.
function igualar() {
   if (op == "no") {
      this.pantalla.innerHTML = x;
   }
   else {
      let sl = ni + op + x;
      let sol = eval(sl);
      this.pantalla.innerHTML = sol;
      x = sol;
      op = "no";
      xi = 1;
   }
}

//Función que resuelve la raíz cuadrada.
function raizc() {
   var x = Math.sqrt(x);
   this.pantalla.innerHTML = x;
   op = "no";
   xi = 1;
}

//Función que calcula el porcentaje de un número dividiendo entre 100.
function porcent() { 
   var x = x/100;
   this.pantalla.innerHTML = x;
   igualar();
   xi = 1;
}

//Función que cambia el signo al número en pantalla.
function opuest() { 
   let nx = Number(x);
   nx = -nx;
   x = String(nx);
   this.pantalla.innerHTML = x;
}

function inve() {
   let nx = Number(x);
   nx = (1/nx);
   x = String(nx);		 
   this.pantalla.innerHTML = x;
   xi = 1;
}

//Función que borra el número situado en última posición al pulsar la tecla 'Retr'.
function retro() {
   let cifras = x.length;
   let br = x.substr(cifras-1,cifras)
   x = x.substr(0,cifras-1);
   if(x == "") {
      x = "0";
   }
   if(br == ".") {
      coma = 0;
   }
   this.pantalla.innerHTML = x;
}

//Borra la pantalla de manera parcial al pulsar la tecla 'C'.
function borradoParcial() {
   this.pantalla.innerHTML = 0;
   let x = 0;
   coma = 0;
}

//Borra la pantalla de manera total al pulsar la tecla 'CE'.
function borradoTotal() {
   this.pantalla.innerHTML = 0;
   x = "0";
   coma = 0;
   ni = 0;
   op = "no";
}

//Función que detecta las teclas presionadas y las representa por pantalla.
function teclado(elEvento) { 
   let evento = elEvento || window.event;
   let k = evento.keyCode;
   
   //Teclas númericas del teclado alfamunérico.
   if(k > 47 && k < 58) { 
      let p=k-48;
      this.p=String(p);
      numero(p);
   }	

   //Teclas del teclado númerico.
   if(k > 95 && k < 106) {
      let p = k-96;
      this.p = String(p);
      numero(p);
   }

   //A continuación mostramos una sucesión de sentecias if en función de la tecla pulsada para las operaciones.
   if(k == 110 || k == 190) {
      numero(".");
   }

   if(k == 106) {
      operar('*');
   }
   
   if(k == 107) {
      operar('+');
   }
   
   if(k == 109) {
      operar('-');
   }
   
   if(k == 111) {
      operar('/');
   }
   
   if(k == 32 || k == 13) {
      igualar();
   }
   
   if(k == 46) {
      borradoTotal();
   }

   if(k == 8) {
      retro();
   }
   
   if(k == 36) {
      borradoParcial();
   }
}