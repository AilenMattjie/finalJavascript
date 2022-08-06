//? VARIABLES: 

//Se crea un elemnto div en el archivo index.html para que allí se inserte una tabla con el correo recibido
let correoRecibido = document.createElement("div");

//? FUNCIONES:

// Se utiliza una async function que devuelve una promesa implicatamente utilizando la keyword await
async function imprimirBandejaDeEntrada(){
    //se llama al al archivo data.json que es el que contiene un array de objetos con los mensajes recibidos
    // simulando una base de datos
    await fetch('../data/data.json')
    // parseo el string a objetos
    .then (res => res.json())
    // llamo a la funcion imprimirCorreoRecibido pasando como parametro 'data' para imprimir en el
    //HTML una tabla con el contenido del json
    .then(data => {
        imprimirCorreoRecibido(data)
    })
    .finally(()=>console.log('final'))
}


function imprimirCorreoRecibido(data) { 
    // Se llama por id al elemento "bandeja_de_entrada" que se ubica en el archivo index.html
    let contenedor2 = document.getElementById("bandeja_de_entrada");
  
    //se itera dentro del archivo data.json mediante el uso de forEach, solicitando que por cada elemento 
    // de los objetos que contiene el array (emisor, asunto, mensaje) se imprima una tabla
    data.forEach(({emisor, asunto, msje})=> {
       const dataHTML =  ` 
             <tr>
                <td scope="col"> ${emisor} </td>
                <td scope="col"> ${asunto} </td>
                <td scope="col"> ${msje} </td>
            </tr>      
        `
    });     
        
    //se inserta mediante innerHTML la variable correoRecibido, detallando la tabla que contiene la misma
    correoRecibido.innerHTML = 
                `<div class="col-md-9">
                    <table id="tablaBandeja" class="table table-dark table-sm table-striped-columns">
                        <thead>
                            <tr>
                                <th>Emisor</th>
                                <th>Asunto</th>
                                <th>Contenido</th>
                            </tr>
                        </thead>
                        <tbody>  
                        </tbody id="bodyTabla">
                    </table>
                </div>      
                `,
    //se anida correoRecibido al 'contenedor2' que fue definido al principio de este archivo
    contenedor2.appendChild(correoRecibido);
    dataHTML = document.getElementById("bodyTabla");
    //se anida dataHTML (que contiene los datos recibidos del archivo json) a la tabla 'correoRecibido'
    correoRecibido.appendChild(dataHTML);
}


//? EVENTOS 

//mediante un evento "click" se ejecuta la async function 'imprimirBandejaDeEntrada'
let btnImprimir = document.getElementById("recibidos");
btnImprimir.addEventListener("click", () =>{
    imprimirBandejaDeEntrada();
})


