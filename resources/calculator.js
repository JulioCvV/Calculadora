var nuNumero1;
var nuNumero2;
var stOperation=0;
function handleInput(stInput){
    var nuValue= parseFloat(document.getElementById(stInput).value);
    if(stInput =="number1"){
        nuNumero1 = nuValue;
    }else{
        nuNumero2 = nuValue;
    }
    calcular();
}

function handleSelect(){
    stOperation = document.getElementById("operations").selectedIndex;
    calcular(stOperation);
}

function calcular(){
    var stResultado;
    if(stOperation==0){
        stResultado= nuNumero1 + nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }else if(stOperation==1){
        stResultado= nuNumero1 - nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }else if(stOperation==2){
        stResultado= nuNumero1 * nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }else if(stOperation==3){
        stResultado= nuNumero1 / nuNumero2;
        document.getElementById("resultValue").innerHTML = stResultado;
    }
}


