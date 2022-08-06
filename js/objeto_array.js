//? OBJETOS Y ARRAYS //

class correo{
    constructor(emisor, receptor, asunto, contenido){
        this.emisor = emisor
        this.receptor = receptor
        this.asunto = asunto
        this.contenido = contenido
    }
}

//array de objetos
const bandejaDeEntrada = [];


//? FUNCIONES 

//esta funcion se ejecuta mediante un evento ubicado en el archivo mensajeria.js, que hace referencia
// a un elemento del archivo correoEnviado.html

// se crea un elemento div para imprimir una tabla en el

let tabla = document.createElement("div");

function imprimirTabla() { 
    //se llama al div con id "bandeja_de_salida" del archivo correoEnviado.html
	let contenedor1 = document.getElementById("bandeja_de_salida");

    //dentro del html se busca insertar una tabla de la cual el id "bodyTabla" sera extraido
    // en otra parte del codigo
    let getStorage = localStorage.getItem("correoEnStorage");
    let stringToObj = JSON.parse(getStorage);
    console.log(stringToObj);
    
    let map = stringToObj.map((x) => {
        const {emisor,asunto,receptor} = x;
        return (
            ` 
                    <tr>
                        <td scope="col"> ${emisor} </td>
                        <td scope="col"> ${receptor} </td>
                        <td scope="col"> ${asunto} </td>
                    </tr>
                
            `
        )

    })
    
    tabla.innerHTML = 
                `<div class="col-md-9">
                    <table id="tablaBandeja" class="table table-dark table-sm table-striped-columns">
                        <thead>
                            <tr>
                                <th> DE </th>
                                <th> PARA </th>
                                <th> TEMA </th>
                            </tr>
                        </thead>
                        <tbody>  
                        </tbody>
                            ${map.join("")}
                        </tbody id="bodyTabla">
                    </table>
                </div>      
                `,

    // se anida tabla a contenedor dentro del html
	contenedor1.appendChild(tabla);

    //se llama al elemento creado en tabla.innerHTML
	let bodyTabla = document.getElementById("bodyTabla");
}
