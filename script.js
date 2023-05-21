//Declaracion de variables:

const textoUsuario = document.querySelector(".boxText1");
const textoMesnsaje = document.querySelector(".boxText2");


//Funcion para Encriptar texto:

function encriptar(stringEncriptado) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    //Validacion de caracteres especiales:    
    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(stringEncriptado)) {
      return "El texto contiene letras con acentos o caracteres especiales, intenta de nuevo!";
    }

    //remplazo de caracteres:
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return stringEncriptado;
}


//Funcion para el Boton de Encriptar texto:

function btnEncriptar() {
    const textoEncriptado = encriptar(textoUsuario.value)
    textoMesnsaje.value = textoEncriptado;
    textoUsuario.value ="";
    textoMesnsaje.style.backgroundImage="none";

}

//Funcion para Desencriptar texto:

function desencriptar(stringDesencriptado) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    //Validacion de caracteres especiales:  
    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(stringDesencriptado)) {
      return "El texto contiene letras con acentos o caracteres especiales, intenta de nuevo!";
    }

    //remplazo de caracteres:
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptado;
}

//Funcion para boton Desencriptar texto:

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textoUsuario.value)
    textoMesnsaje.value = textoEncriptado;
    textoUsuario.value ="";
    textoMesnsaje.style.backgroundImage="none";
}

//Funcion Copiar:

function copiarTexto() {
    // Obtener el elemento de texto encriptado/desencriptado
    const textoEncriptado = textoMesnsaje.value;
  
    // Verificar si el texto está en blanco
    if (textoEncriptado.trim() === '') {
        Swal.fire({
            title: 'UPS!',
            text: 'No hay texto en el campo',           
            icon: 'error',
            width: 600,
            padding: '2em',
            color: 'black',
            background: 'url(https://img.freepik.com/vector-premium/pensamiento-caracter-hombre_155707-268.jpg)',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Entiendo'
          });
        return;
    }
    
    // Crear un elemento de textarea temporal
    const textareaTemp = document.createElement('textarea');
    textareaTemp.value = textoEncriptado;
  
    // Agregar el elemento de textarea al documento
    document.body.appendChild(textareaTemp);
  
    // Seleccionar el contenido del textarea
    textareaTemp.select();
    textareaTemp.setSelectionRange(0, textoEncriptado.length);
  
    // Ejecutar el comando de copiar
    document.execCommand('copy');
  
    // Eliminar el elemento de textarea temporal
    document.body.removeChild(textareaTemp);
  
    // Mostrar un mensaje de éxito
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        color: 'black',
        width: 400,
        title: 'Texto copiado al portapapeles',
        showConfirmButton: false,
        background: '#007BFF',
        timer: 1500
      })
  }
  