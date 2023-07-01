let idade=60;

if (idade >= 18) {
  if (idade < 60) {
    console.log("Você é um adulto")
  }
  if (idade >= 60) {
    console.log("Você é um idoso")
  }
} else {
  console.log("Você é menor de idade")
}

 if (idade >= 18 || idade < 60) {
  console.log("Você é um adulto")
}

let op = "."
let valor1 = 27.5
let valor2 = 20
let resultado

if (op == "+"){
    resultado = valor1 + valor2;
    console.log(resultado)

} else if(op == "*"){
  resultado = valor1 * valor2;
  console.log(resultado)
 
} else if (op == "/"){
  resultado = valor1 / valor2;
  console.log(resultado)

} else if(op == "-"){
  resultado = valor1 - valor2;
  console.log(resultado)

} else{
  console.log("Operação Inválida!")

}