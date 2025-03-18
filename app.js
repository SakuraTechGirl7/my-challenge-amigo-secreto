// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let maximoAmigos = 5;
let valido = true;
let control = 0;
let i = 0;
let simbolos = "!/0123456789^+$/<>|#%&()=¿?-*¡";
/*let simbolos = ["!","/",0,1,2,3,4,5,6,7,8,9,
                "^","+","$","/","<",">","|",
                "#","%","&","(",")","=","¿","?","-","*","¡"];*/

function ingresaAmigo() {
    while(control <= maximoAmigos){
            
            let nombreUsuario = document.getElementById('nombreAmigo').value;
            alert(nombreUsuario);
            //validarAmigo(nombreUsuario);
            if(simbolos.includes(nombreUsuario)){
                alert("ingresa nombre válido");

            } else{
            listaAmigos.push(nombreUsuario);
            limpiaCaja();
            control++;
            } 
    } 
    console.log(listaAmigos);
    sortearAmigo(listaAmigos);       
}


function limpiaCaja() {
    document.getElementById('nombreAmigo').value='';
    
}

function sortearAmigo(listaAmigos){
    let elegido = parseInt(Math.random(listaAmigos.length)* maximoAmigos -1);
    console.log(listaAmigos[elegido]);

}
/*
validarAmigo(nombre){
    //if(${nombre } )
    alert(nombre);
    for(int i=0;i<=(simbolos.length)-1; i++){
        if(${nombre.includes(simbolos[i])}) {
            
            alert("Ingresa un nombre válido");
            ingresaAmigo();
        }
        else{
            listaAmigos.push(nombre);
            console.log(listaAmigos);
        }
    }
}*/