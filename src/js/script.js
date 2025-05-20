
/* Creamos función para actualizar y agregar los quill a las nuevas notas */
/*
const quillEditors = {}
function actualizarQuill(cuantasnotas){
    for (let i = 0; i < cuantasnotas; i++){
        const idContainer = `#textoNotaId${i}`;
        quillEditors[`quill${i}`] = new Quill(idContainer, {theme: 'snow'});
    }
}
    */
const quill = new Quill('#editor');

/* Creamos funcion para agregar una nota */
function agregarNota(e) {
    /* Configuracion de Identificadores para las notas*/
    let numerodiv = document.querySelectorAll("main>div");

    let notas = numerodiv.length;

    let idNuevaNota = notas + 1;

    const svgNS = "http://www.w3.org/2000/svg";
    /* Creamos las etiquetas */
    let main = document.getElementById("contenedor-main");
    let tarjeta = document.createElement("div");
    let div = document.createElement("div");                            
    let contenido = document.createTextNode("Hello World!!!");
    let texto = document.createElement("p") ;
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
    tarjeta.classList.add('notas');
    tarjeta.classList.add(`${classcolor}`);
    tarjeta.setAttribute("id", `nota${idNuevaNota}`);
    div.classList.add('textoNota');
    div.id = `textoNotaId${idNuevaNota}`;
    section.classList.add('botonesNota');
    button1.setAttribute("id", `borrar${idNuevaNota}`);
    button1.classList.add('borrar');
    button2.setAttribute("id", `descargar${idNuevaNota}`);
    button2.classList.add('descargar');
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
    texto.appendChild(contenido);
    div.appendChild(texto);
    tarjeta.appendChild(div);
    tarjeta.appendChild(section);
    main.appendChild(tarjeta);

    /* Llamamos a la función de actualizar Quill para hacerlo en las notas nuevas */
    actualizarQuill(idNuevaNota);
}
/* Creamos función para eliminar una nota, posteriormente pondre un aviso*/
function borrarNota(identificador) {
    let padreTotal = document.getElementById(identificador).parentNode.parentNode;
    padreTotal.remove();
}
/* Creamos función para guardar la nota en la base de datos si hemos iniciado sesion*/
function guardarNota() {

}
/* Creamos funcion para descargar nuestra nota en archivo txt */
function descargarNota() {

}
/* Creamos funcion para actualizar todos los botones de la pagina */
function actualizarListenersBotones(){
    const parrafos = document.getElementById("contenedor-main").querySelectorAll(".borrar");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener('click', function(e) {
            identificador = e.currentTarget.id;
            borrarNota(identificador);
        });
    }
}
function cambiarTextarea(){
    let textareas = document.getElementsByTagName('textoNota');
    for (let i in textareas){
        textareas[i].setAttribute("style", `font-size: ${tamannoLetra}; font-family: ${tipoLetra}`);
    }
};
function cambiosRealizados(){
    /* Declaramos las etiquetas para crear el popup */
    let divCambio = document.createElement("div");
    let pCambio = document.createElement("p");
    let textoCambio = document.createTextNode("Cambios Realizados");

    /* Creamos Atributos */
    divCambio.setAttribute("id", 'cambiosHechos');

    /* Hacemos las conexiones y lo agregamos al html */
    pCambio.appendChild(textoCambio);
    divCambio.appendChild(pCambio);
    document.body.appendChild(divCambio);

    /* Aqui esperamos un momento para que se muestre el popup y lo borramos */
    setTimeout(() => document.getElementById('cambiosHechos').remove(), 3000);

}


/* Declaración de variables */
let ventana;
const ventanaSettings = document.getElementById("ventanaSettings");
let tamannoLetra = '12px';
let tipoLetra = 'arial';

/* Llamamos al actualizador de botones una vez para que se carguen los botones. */
actualizarListenersBotones();
/* Llamamos al cambiarTammanoLetra_tipoLetra para tener un tipo y tamaño incial y por defecto*/

/* Creamos los eventos para crear las notas de distintos colores. */
for (let i = 1; i <= 5; i++){
    document.getElementById(`botonPrincipal${i}`).addEventListener("click", function(e) {
        color = i;
        agregarNota();
        actualizarListenersBotones();
    });
}

/* Obtenemos todo el formulario de Settings */

document.getElementById("formSettings").addEventListener("submit", function(e) {
    e.preventDefault();
    tipoLetra = document.getElementById('tipoLetra').value;
    tamannoLetra = document.getElementById('tamannoLetra').value;
    cambiosRealizados();
});
