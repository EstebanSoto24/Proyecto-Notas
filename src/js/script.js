function agregarNota(e) {
    /* Configuracion de Identificadores para las notas*/
    let numerodiv = document.querySelectorAll("main div");

    let notas = numerodiv.length;

    let idNuevaNota = notas + 1;

    const svgNS = "http://www.w3.org/2000/svg";
    /* Creamos las etiquetas */
    let main = document.getElementById("contenedor-main");
    let div = document.createElement("div");
    let form = document.createElement("form");
    let input = document.createElement("input");
    let section = document.createElement("section");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let svgbutton1 = document.createElementNS(svgNS, "svg");
    let svgbutton2 = document.createElementNS(svgNS, "svg");
    let svgbutton3 = document.createElementNS(svgNS, "svg");
    let usebutton1 = document.createElementNS(svgNS, "use");
    let usebutton2 = document.createElementNS(svgNS, "use");
    let usebutton3 = document.createElementNS(svgNS, "use");


    /* Ponemos bgcolor a la etiqueta */
    switch (color){
        case 1:
            classcolor = "color1";
        break;
        case 2:
            classcolor = "color2";
        break;
        case 3:
            classcolor = "color3";
        break;
        case 4:
            classcolor = "color4";
        break;
        case 5:
            classcolor = "color5";
        break;
    }

    /* Asignamos y creamos los atributos de los elementos */
    div.setAttribute("class", "notas");
    div.setAttribute("class", "${classcolor}");
    div.classList.add('notas');
    div.classList.add(`${classcolor}`);
    div.setAttribute("id", `nota${idNuevaNota}`);
    form.setAttribute("method", "post");
    input.setAttribute("class","textoNota");
    input.classList.add('textoNota');
    input.setAttribute("type", "textarea");
    section.setAttribute("class", "botonesNota");
    section.classList.add('botonesNota');
    button1.setAttribute("class", "borrar");
    button1.setAttribute("id", `borrar${idNuevaNota}`);
    button1.classList.add('borrar');
    button2.setAttribute("class", "descargar");
    button2.setAttribute("id", `descargar${idNuevaNota}`);
    button2.classList.add('descargar');
    button3.setAttribute("class", "guardar");
    button3.setAttribute("id", `guardar${idNuevaNota}`);
    button3.classList.add('guardar');
    usebutton1.setAttribute("href", "#svgBorrar");
    usebutton2.setAttribute("href", "#svgDescargar");
    usebutton3.setAttribute("href", "#svgGuardar");

    /* Unimos todo */
    svgbutton1.appendChild(usebutton1);
    svgbutton2.appendChild(usebutton2);
    svgbutton3.appendChild(usebutton3);
    button1.appendChild(svgbutton1);
    button2.appendChild(svgbutton2);
    button3.appendChild(svgbutton3);
    section.appendChild(button1);
    section.appendChild(button2);
    section.appendChild(button3);
    form.appendChild(input);
    div.appendChild(form);
    div.appendChild(section);
    main.appendChild(div);

}

function borrarNota() {
    let padreTotal = document.getElementById(identificador).parentNode.parentNode;
    padreTotal.remove();
}

function guardarNota() {

}

function descargarNota() {

}

function actualizarBotones(){
    const parrafos = document.getElementById("contenedor-main").getElementsByTagName("button");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener('click', function(e) {
            identificador = e.currentTarget.id;
            borrarNota();
        });
    }
}
/* Declaración de variables */
let identificador;


/* Llamamos al actualizador de botones una vez para que se carguen los botones. */
actualizarBotones();

document.getElementById("botonPrincipal1").addEventListener("click", function(e) {
    color = 1;
    agregarNota();
    actualizarBotones();
});

document.getElementById("botonPrincipal2").addEventListener("click", function(e) {
    color = 2;
    agregarNota();
    actualizarBotones();
});
document.getElementById("botonPrincipal3").addEventListener("click", function(e) {
    color = 3;
    agregarNota();
    actualizarBotones();
});
document.getElementById("botonPrincipal4").addEventListener("click", function(e) {
    color = 4;
    agregarNota();
    actualizarBotones();
});
document.getElementById("botonPrincipal5").addEventListener("click", function(e) {
    color = 5;
    agregarNota();
    actualizarBotones();
});


