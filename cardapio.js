
//armazenamento dos dados
function soma_pedido(num){
            

    let valor = document.getElementById("resultado").value + num 
    
    
    document.getElementById("resultado").value = valor + "+"
    }


    function resultado(){
        let resultado = eval(document.getElementById("resultado").value.slice(0, -1))
        document.getElementById("resultado").value = "R$ " + resultado
    }
