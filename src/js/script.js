// Inicializamos todos los arrays neceesarios.
let quillInstances = [];
let escuchaBorrar = [];
let escuchaDescargar = [];
let escuchaGuardar = [];

function cerrarPopupNombre(){
    document.getElementById('alerta').style.display = 'none';
}
function cerrarNombre() {
    document.getElementById('alerta').style.display = 'none';
    let titulo = document.getElementsByName("titulo")[0];
    let idTarjeta = titulo.value
    if (idTarjeta == "" || idTarjeta.includes(" ")){
        document.getElementById('alerta').style.display = 'flex';
        falloRealizado();
    }else {
        let nombreTarjeta = titulo.value;
        titulo.value = "";
        agregarNota(nombreTarjeta);
    }
}
/* Creamos funcion para agregar una nota */
function abrirNombre(){
    document.getElementById('alerta').style.display = 'flex';
}
function agregarNota(nombreTarjeta) {
    /* Configuracion de Identificadores para las notas*/
    let numerodiv = document.querySelectorAll("main>div");

    let notas = numerodiv.length;

    let idNuevaNota = notas;

    const svgNS = "http://www.w3.org/2000/svg";
    /* Creamos las etiquetas */
    /* contenedor_main */
    let main = document.getElementById("contenedor-main");
    /* Titulo */
    let textoTitulo = document.createTextNode(nombreTarjeta);
    let titulo = document.createElement("h3");
    /* Toolbar */
    let toolbar = document.createElement("div");
    let buttonEditor1 = document.createElement("button");
    let buttonEditor2 = document.createElement("button");
    let buttonEditor3 = document.createElement("button");
    let buttonEditor4 = document.createElement("button");
    let buttonEditor5 = document.createElement("button");
    let imgButtonEditor1 = document.createElement("img");
    let imgButtonEditor2 = document.createElement("img");
    let imgButtonEditor3 = document.createElement("img");
    let imgButtonEditor4 = document.createElement("img");
    let imgButtonEditor5 = document.createElement("img");
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
    /* Titulo */
    titulo.classList.add('titulo');
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
    buttonEditor4.classList.add('ql-align');
    imgButtonEditor4.src = "assets/svg/align.svg";
    buttonEditor4.setAttribute("onclick", "alignTexto(this)");
    buttonEditor5.classList.add('ql-list');
    imgButtonEditor5.src = "assets/svg/list.svg";
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
    /* Titulo */
    titulo.appendChild(textoTitulo);
    /* Toolbar */
    buttonEditor1.appendChild(imgButtonEditor1);
    buttonEditor2.appendChild(imgButtonEditor2);
    buttonEditor3.appendChild(imgButtonEditor3);
    buttonEditor4.appendChild(imgButtonEditor4);
    buttonEditor5.appendChild(imgButtonEditor5);
    toolbar.appendChild(buttonEditor1);
    toolbar.appendChild(buttonEditor2);
    toolbar.appendChild(buttonEditor3);
    toolbar.appendChild(buttonEditor4);
    toolbar.appendChild(buttonEditor5);
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
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(toolbar);
    tarjeta.appendChild(div);
    tarjeta.appendChild(section);
    main.appendChild(tarjeta);

    /* Llamamos a la función de actualizar Quill para hacerlo en las notas nuevas */
    actualizarListenersBotones();
    actualizarQuill();
}
/* Creamos función para eliminar una nota, posteriormente pondre un aviso*/
function borrarNota(id) {
    let padre = document.getElementById(id).closest(".notas");
    

    let indice = Number(id.substring(6));
    

    alert(escuchaBorrar);
    
    alert(indice);
    actualizarIds();
    actualizarListenersBotones();
    actualizarQuill();
    escuchaBorrar[indice] = false;
    
    
    padre.remove();
}
/* Creamos función para guardar la nota en la base de datos si hemos iniciado sesion*/
function guardarNota() {

}
/* Creamos funcion para descargar nuestra nota en archivo txt */
function descargarNota(identificador) {
    let tarjeta = document.getElementById(identificador).parentNode.parentNode;
    let contenidoHtml = tarjeta.getElementsByTagName("div")[1].innerHTML;
    /* Quitamos contenido editable */
    let htmlCompleto = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Documento Descargado</title>
        </head>
            <body style="color: ${colorLetra}; font-size: ${tamannoLetra}; font-family: ${tipoLetra}">
                ${contenidoHtml}
            </body>
        </html>`;

    let blob = new Blob([htmlCompleto], { type: "text/html" });

            let enlace = document.createElement("a");
            enlace.href = URL.createObjectURL(blob);
            enlace.download = "archivo.html";
            enlace.click();

            URL.revokeObjectURL(enlace.href);
}
/* Creamos funcion para actualizar todos los botones de la pagina */
function actualizarListenersBotones(){
    let cont = document.querySelectorAll("main>div").length;

    for (let i = 0; i < cont; i++){
        if (escuchaBorrar[i] == true){
            
        }else{
            document.getElementById(`borrar${i}`).addEventListener('click', function(e) {
                let identificador = e.currentTarget.id;
                borrarNota(identificador);
            });
        }
        escuchaBorrar[i] = true;
    }
    for (let i = 0; i < cont; i++){
        if (escuchaDescargar[i] == true){
            
        }else{
            document.getElementById(`descargar${i}`).addEventListener('click', function(e) {
                let identificador = e.currentTarget.id;
                alert(identificador);
            });
        }
        escuchaDescargar[i] = true;
    }
    for (let i = 0; i < cont; i++){
        if (escuchaGuardar[i] == true){
            
        }else{
            document.getElementById(`guardar${i}`).addEventListener('click', function(e) {
                let identificador = e.currentTarget.id;
                alert(identificador);
            });
        }
        escuchaGuardar[i] = true;
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
function falloRealizado(){
    /* Declaramos las etiquetas para crear el popup */
    let divCambio = document.createElement("div");
    let pCambio = document.createElement("p");
    let textoCambio = document.createTextNode("Escribe el titulo correctamente ej: Nota1");

    /* Creamos Atributos */
    divCambio.setAttribute("id", 'fallo');

    /* Hacemos las conexiones y lo agregamos al html */
    pCambio.appendChild(textoCambio);
    divCambio.appendChild(pCambio);
    document.body.appendChild(divCambio);

    /* Aqui esperamos un momento para que se muestre el popup y lo borramos */
    setTimeout(() => document.getElementById('fallo').remove(), 3000);

}
function actualizarIds(){
    let tarjetas = document.querySelectorAll("main>div");

    for (let i = 0; i < tarjetas.length; i++){
        tarjetas[i].id = `nota${i}`;
        let section = tarjetas[i].querySelector('.botonesNota');
        section.querySelector('.borrar').id = `borrar${i}`;
        section.querySelector('.descargar').id = `descargar${i}`;
        section.querySelector('.guardar').id = `guardar${i}`;
    }
}
function actualizarQuill(){
    quillInstances = []; // Limpiamos las instancias Quill Anteriores.

    const tarjetas = document.querySelectorAll("main>div");
    
    tarjetas.forEach((tarjeta, i) => {
        const toolbar = tarjeta.querySelector(".toolbarEditor");
        const editor = tarjeta.querySelector('.textoNota');

        toolbar.id = `toolbar${i}`;
        editor.id = `editor${i}`;

        let quill = new Quill(`#editor${i}`, {
            modules: {
                toolbar: `#toolbar${i}`
            }
        });
        quillInstances.push(quill);
    });
}
function alignTexto(button){
    let cambioAlign = button.parentNode.parentNode.getElementsByTagName("div")[1];
    if (align == 0){
        cambioAlign.setAttribute("style", "text-align: center");
        align = 1;
    }else if (align == 1) {
        cambioAlign.setAttribute("style", "text-align: right");
        align = 2;
    }else{
        cambioAlign.setAttribute("style", "text-align: left");
        align = 0;
    }
}

/* Declaración de variables */
let ventana;
let align = 0;
const ventanaSettings = document.getElementById("ventanaSettings");
let tamannoLetra = '12px';
let tipoLetra = 'arial';
let colorLetra;

/* Llamamos al actualizador de botones una vez para que se carguen los botones. */
actualizarListenersBotones();
/* Llamamos a actualizarQuill() para que agrege todos los editores necesarios */
actualizarQuill();
/* Creamos los eventos para crear las notas de distintos colores. */

for (let i = 1; i <= 5; i++){
    document.getElementById(`botonPrincipal${i}`).addEventListener("click", function(e) {
        color = i;
        abrirNombre();
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
