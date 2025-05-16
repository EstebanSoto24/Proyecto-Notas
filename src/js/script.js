
function agregarNota() {
    /* Configuracion de Identificadores para las notas*/
    let numerodiv = document.querySelectorAll("main div");

    let notas = numerodiv.length;

    let idNuevaNota = notas + 1;

    /* Creamos las etiquetas */
    let main = document.getElementById("contenedor-main");
    let div = document.createElement("div");
    let form = document.createElement("form");
    let input = document.createElement("input");
    let section = document.createElement("section");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let svgbutton1 = document.createElement("svg");
    let svgbutton2 = document.createElement("svg");
    let svgbutton3 = document.createElement("svg");
    let usebutton1 = document.createElement("use");
    let usebutton2 = document.createElement("use");
    let usebutton3 = document.createElement("use");

    /* Asignamos y creamos los atributos de los elementos */
    div.setAttribute("class", "notas");
    div.classList.add('notas');
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
    usebutton1.setAttribute('href', '#svgBorrar');
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

}

const boton1 = document.getElementById("botonPrincipal1");

boton1.addEventListener("click", agregarNota);
