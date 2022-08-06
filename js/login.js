//? FUNCIONES //

// Esta función se ejecuta en el archivo index.html, sirve para verificar si el usuario y 
// y contraseña ingresado mediante inputs del html son correspondientes a los que se 
// encuentran registrados en el archivo usuarios.js

function verificarUsuario (){

    //obtengo los datos de los inputs del html
    let usuarioIngresado = document.getElementById('exampleInputEmail1').value;
    let contraseñaIngresada = document.getElementById('exampleInputPassword1').value;
    
    //en el caso de que los inputs no se encuentren vacios, los datos ingresados se verificaran
    // utilizando una funcion flecha 
    if ((usuarioIngresado !="") && (contraseñaIngresada !="")) {
        
        let verificacion1 = perfiles.find((e) => e.email === usuarioIngresado);
        let verificacion2 = perfiles.find((i) => i.contraseña == contraseñaIngresada);

        //una vez realizada esa verificacion si los datos son diferentes a undefined se ejecutara
        // un alert implementado mediante la libreria sweetalert2, caso contrario se ejecutara otro 
        // alert advirtiendo al usuario del error cometido, el mismo se implementa con la misma libreria
        if(verificacion1 != undefined && verificacion2 != undefined)
        {
            Swal.fire({
                title: 'Bienvenido/a!!!',
                text: usuarioIngresado,
                imageUrl: '/multimedia/email.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
              
              // en caso de que el usuario se haya verificado correctamente se lo redirige al 
              //archivo index.html
              window.location.href = 'http://127.0.0.1:5500/html/index.html'   


        }else {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'contraseña / email incorrecto'
            })
        } 
    
    // en el caso de que alguno de los inputs se encuentren vacios se ejecutara un alert implementado
    // mediante la libreria antes mencionada advirtiendo al usuario del error cometido
    }else{
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña invalidos, ingrese nuevamente'
            })
    }

}

//? EVENTOS //

// en el documento index.html debajo de los inputs hay un boton con el Id "enviar", hago uso del DOM
// para llamar a ese elemento y agregarle el evento "click", el cual ejecutará la función descripta arriba
let btnEnviar = document.getElementById('enviar')
btnEnviar.addEventListener('click', ()=>{
    verificarUsuario(); 
})