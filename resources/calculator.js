var nuNumero1= parseFloat(document.getElementById("number1").value);
var nuNumero2= parseFloat(document.getElementById("number2").value);
var stIndexOperacion=document.getElementById("operations").selectedIndex;
var stResultado;

function calcular(){
    if(nuNumero2==0){
        alert("Indeterminado");
    }
    if(stIndexOperacion==0){
        stResultado= nuNumero1 + nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }else if(stIndexOperacion==1){
        stResultado= nuNumero1 - nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }else if(stIndexOperacion==2){
        stResultado= nuNumero1 * nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }else if(stIndexOperacion==3){
        stResultado= nuNumero1 / nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }
}

