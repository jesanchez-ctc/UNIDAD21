var preguntas = [
    "¿Cuál es la canción iconica de Reik?",
    "¿Quienes cantan la canción Ecos de amor?",
    "¿Quién canta Noviembre sin ti?",
    "¿Último albúm de Ha-Ash?",
    "¿Quién canta: Yo te esparere?",
    "¿Canción popular de Camila",
    "¿Cuál es el dúo mexicoargentino de balada?",
    "hola",
];
var opciones = [
    [ "Pasos de cero",
    "Ya me entere ", 
    "Ecos de amor", 
    "Con quien se queda el perro "],

    ["Calee y el dandee",
    "Reik - Morat", 
    "Jesse & Joy - Pablo Alboran", 
    "Morat - Juanes"],

    ["Sin bandera", 
    "Reik",
     "Morat",
      "Ha-Ash"],

    ["30 de febrero",
    "Ha-Ash:En Vivo", 
    "Mundos opuestos", 
    "Primera fila: Hecho realidad"],

    ["Calee y el Dandee",
    "Sebastian Yatra", 
    "Reik", 
    "Jesse & Joy"],

    ["En esta no",
    "Cristina", 
    "Alejate de mi ", 
    "Mientes"],

    ["Aventura",
    "Jesse & Joy", 
    "Sin bandera", 
    "Camila"],

    ["hola",
    "hola2",
    "hola3",
    "hola4"]
]


var puntajePorOpción = [
      [0, 5, 0, 0],
      [0, 0, 5, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [5, 0, 0, 0],
      [0, 0, 0, 5],
      [0, 0, 5, 0],
      [0, 0, 0, 0],
]

var puntaje = 0;
var i=0;

function mostrarResultado(){
var div = document.getElementsByClassName("card")[0];
div.innerHTML = "";

document.getElementById("barra-progreso").value=i*100/(preguntas.length-1);


div.innerHTML += "<h3 class = 'resultado_título'>PREGUNTAS</h3>"


if (puntaje>30){
    estilovida = "<span id='estilo-demasiado'>DEMASIADO</span>";
} else if (puntaje>15) {
    estilovida = "<span id='estilo-losuficiente'>LO SUFICIENTE</span>";
} else if (puntaje>10) {
    estilovida = "<span id='estilo-lobasico'>LO BASICO</span>";
} else if (puntaje>5) {
    estilovida = "<span id='estilo-lominimo'>LO MINIMO</span>";
} else {
    estilovida = "<span id='estilo-cero'>CERO</span>";
}

div.innerHTML += `<p class='resultado_obtenido'> Haz obtenido ${puntaje} puntos, lo cual significa que conoces ${estilovida} a las baladas</p>`
}

function actualizarpuntaje(opción) {
    var indice = opción -1;
    puntaje += puntajePorOpción[i][indice];
    if (i < preguntas.length -1){
        siguientePregunta();
    
    }else{
        mostrarResultado();
    }
}
function siguientePregunta() {
           
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    
    document.getElementById("barra-progreso").value = i * 100/preguntas.length;
    i++; 

}
siguientePregunta(); //Muestra la primera pregunta 
document.getElementById("op1").addEventListener("click", function () {
     actualizarpuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
     actualizarpuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
     actualizarpuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
     actualizarpuntaje(4);
});




