//? FUNCIONES //

// La funcion verificarDatosUsuarios extrae del docuemento mensajeria.html los valores de los inputs
// creando una variable para cada uno de ellos, para poder verificarlos (que no sean campos vacios o 
// erroneos, teniendo en cuenta que 'usuarioEmisor' y 'UsuarioReceptor' hace referencia a los datos 
// encontrados en el documento usuarios.js)

function verificarDatosUsuarios (){
    let usuarioEmisor = document.getElementById('de').value;
    let usuarioReceptor = document.getElementById('para').value;
    let tema = document.getElementById('asunto').value;
    let msj = document.getElementById('mensaje').value;
    

    // una vez extraidos los datos ingresados por el usuario en el html se verifica que no sean campos 
    //vacios o erroneos mediante un condicional, que en caso de detectar esos errores le informa al
    // usuario mediante un alert implementado con la libreria sweetalert2
    if ((usuarioEmisor !="") && (usuarioReceptor !="") && (tema !="") && (msj !="")) {
        
        let verificacionA = perfiles.find((e) => e.email === usuarioEmisor);
        let verificacionB = perfiles.find((i) => i.email == usuarioReceptor);

        if(verificacionA != undefined && verificacionB != undefined)
        {
            // una vez realizadas las verificaciones se agrega a 'mensaje', una funcion que se 
            // ubica dentro del archivo objeto_array.js en el contructor 'correo'
            //TUTOR: Aqui si podemos hacer push al array vacio que tenemos en objeto_array.js
            let mensaje =new correo(usuarioEmisor, usuarioReceptor, tema, msj);
            bandejaDeEntrada.push(mensaje)
            //estos mensajes se archivan en el localStorage
            localStorage.setItem("correoEnStorage",JSON.stringify(bandejaDeEntrada));

            //se utiliza un alert de la liberia sweetalert2 para informar al usuario que su mensaje
            // ha sido enviado con exito
            Swal.fire({
                title: 'Correo Enviado a :',
                text: usuarioReceptor,
                //TUTOR: Corregir la ruta de la imagen
                imageUrl: '../multimedia/email.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
                //TUTOR: Cambie la ubicacion de la funcion para que esta se ejecute solo si los datos del input no estan incorrectos
                imprimirTabla();
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario emisor/receptor invalido, ingrese nuevamente'
                })
        }        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe ingresar un usuario emisor/receptor'
            })
    }

}

//? EVENTOS //

// en el archivo mensajeria.html debajo de los inputs antes nombrados se encuentra el boton con
// ID "send", al cual se lo llama y se le asigna el evento 'click' para que al utilizarlo ejecute
// las funciones de verificarDatosUsuarios que se encuentra en este archivo, y la funcion imprimirTabla
// que se encuentra en el archivo objeto_array.js
let btnSend = document.getElementById('send')
btnSend.addEventListener('click', ()=>{
    verificarDatosUsuarios();
    imprimirTabla();
})