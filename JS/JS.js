/***
 Autor: Diana Esmeralda Ortiz Cervantes
Fecha: 23/10/2024
Examen
 ***/
document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){

        elemento.className = "Cuerpo00";

    }

    if (event.key ==="2"){

        elemento.className = "Cuerpo01";

    }

    if(event.key ==="3"){

        elemento.className = "Cuerpo02";

    }
    if(event.key ==="4"){

        elemento.className = "Cuerpo03";

    }

    if(event.key ==="5"){

        elemento.className = "Cuerpo04";

    }


});

document.addEventListener("keydown", function(event){console.log(event)});      //Ddice que escuchara y va imprimir en la consola la tecla que presione

/***Universidad Autonoma de Durango ***/
/***Diseño de la comunicacion grafica ***/

