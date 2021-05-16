function ejecutar() {
var numero1 = Number(document.getElementById("numero1").value);
var numero2 = Number(document.getElementById("numero2").value);
var operacion = document.getElementById("operator").value;

switch(operacion){
    case "suma": {
        var result = numero1 + numero2;
        break;
    }
    case "resta": {
        var result = numero1 - numero2;        
        break;
    }
    case "multiplicacion": {
        var result = numero1 * numero2;        
        break;
    }
    case "division": {
        var result = numero1 / numero2;
        break;
    }
}

document.getElementById("resultado").value = result;

}