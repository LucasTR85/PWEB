var num1;
var num2;
var num3;

num1 = prompt("Digite o primeiro numero: ");
num2 = prompt("Digite o segundo numero: ");
num3 = prompt("Digite o terceiro numero: ");

var arr1 = [num1, num2, num3];

function pegaMaior(_arr){
    return Math.max.apply(null, _arr);
}

function orndenaArray(_arr){
    return _arr.sort(function(a,b){return a-b}); 
}

alert("Maior número: " + pegaMaior(arr1));

alert("Array ordenado: " + orndenaArray(arr1));