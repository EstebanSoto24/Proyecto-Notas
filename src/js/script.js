
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

/* Creamos funcion para agregar una nota */
function agregarNota(e) {
    /* Configuracion de Identificadores para las notas*/
    let numerodiv = document.querySelectorAll("main>div");

    let notas = numerodiv.length;

    let idNuevaNota = notas + 1;

    const svgNS = "http://www.w3.org/2000/svg";
    /* Creamos las etiquetas */
    /* contenedor_main */
    let main = document.getElementById("contenedor-main");
    /* Toolbar */
    let toolbar = document.createElement("div");
    let buttonEditor1 = document.createElement("button");
    let buttonEditor2 = document.createElement("button");
    let buttonEditor3 = document.createElement("button");
    let imgButtonEditor1 = document.createElement("img");
    let imgButtonEditor2 = document.createElement("img");
    let imgButtonEditor3 = document.createElement("img");
    /* Tarjeta */
    let tarjeta = document.createElement("div");
    /* textarea Editable */
    let div = document.createElement("div");
    let editor = document.createElement("div");         
    let contenido = document.createTextNode("Hello World!!!");
    let texto = document.createElement("p");
    /* Botones eliminar guardar descargar. */
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
    /* Tarjeta */
    tarjeta.classList.add('notas');
    tarjeta.classList.add(`${classcolor}`);
    tarjeta.setAttribute("id", `nota${idNuevaNota}`);
    /* Toolbar */
    toolbar.classList.add('toolbarEditor');
    toolbar.classList.add('ql-toolbar');
    toolbar.setAttribute("id", `toolbar${idNuevaNota}`);
    buttonEditor1.classList.add('ql-bold');
    imgButtonEditor1.src = "assets/svg/bold.svg";
    buttonEditor2.classList.add('ql-italic');
    imgButtonEditor2.src = "assets/svg/italic.svg";
    buttonEditor3.classList.add('ql-underline');
    imgButtonEditor3.src = "assets/svg/underline.svg";
    div.classList.add('textoNota');
    div.classList.add('ql-container');
    div.id = `editor${idNuevaNota}`;
    /* Editor de texto */
    editor.classList.add('ql-editor');
    editor.setAttribute("contenteditable", "true");
    /* Botones Eliminar, Guardar, Descargar. */
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
    /* Toolbar */
    buttonEditor1.appendChild(imgButtonEditor1);
    buttonEditor2.appendChild(imgButtonEditor2);
    buttonEditor3.appendChild(imgButtonEditor3);
    toolbar.appendChild(buttonEditor1);
    toolbar.appendChild(buttonEditor2);
    toolbar.appendChild(buttonEditor3);
    /* Botones Nota */
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
    editor.appendChild(texto);
    div.appendChild(editor);
    /* Tarjeta */
    tarjeta.appendChild(toolbar);
    tarjeta.appendChild(div);
    tarjeta.appendChild(section);
    main.appendChild(tarjeta);

    /* Llamamos a la función de actualizar Quill para hacerlo en las notas nuevas */
    actualizarQuill();
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
function cambiarTammanoLetra_TipoLetra_ColorLetra(){
    let main = document.getElementsByTagName("main")[0];
    main.style.color = colorLetra;
    main.style.fontSize =  tamannoLetra+ "px";
    main.style.fontFamily = tipoLetra;
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
function actualizarQuill(){
    let cuantos = document.querySelectorAll("#contenedor-main>div").length;
    for (let i = 1; i <= cuantos; i++){
        const quill = new Quill(`#editor${i}`, {
            modules: {
                toolbar: `#toolbar${i}`
            }
        });
    }
}

/* Declaración de variables */
let ventana;
const ventanaSettings = document.getElementById("ventanaSettings");
let tamannoLetra = '12px';
let tipoLetra = 'arial';
let colorLetra = 'red';

/* Llamamos al actualizador de botones una vez para que se carguen los botones. */
actualizarListenersBotones();
/* Llamamos al cambiarTammanoLetra_tipoLetra para tener un tipo y tamaño incial y por defecto*/

/* Llamamos a actualizarQuill() para que agrege todos los editores necesarios */
actualizarQuill();

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
    colorLetra = document.querySelector("input[type=color]").value;
    cambiosRealizados();
    cambiarTammanoLetra_TipoLetra_ColorLetra();
});
