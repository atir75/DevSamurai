//desafio 1 
//Incremente a nossa calculara para receber os valores a partir dos dados digitados pelo usuário e mostrar
//como um alertaa.

//  var x = prompt("Digite o primeiro número");
//  var a = prompt("Digite o segundo numero: ");
//  var y = prompt("Digite o terceiro número");
//  var resultado = Number(x) + Number(y);

//  alert("O resultado da soma é: " + resultado);
//


// desafio 2 
// No nosso desafio da calculadora, criar um IF para verificar se o valor é maior que 10, caso seja, informar
// uma mensagem escolhida por você.

// var x = prompt("Digite o primeiro número");
// var a = prompt("Digite o segundo numero: ");
// var y = prompt("Digite o terceiro número");
// var resultado = Number(x) + Number(y);
// if (resultado > 10) {
//     alert("o resultado é maior que 10!")
//  }
//  alert("O resultado da soma é: " + resultado);


 // var idade = 20;
// var genero = "F";

// if ((idade <= 18) && (genero == "F")){
//     console.log("Opa");
// }else {
//     console.log("ai sim")
// }



//AULA FUNÇÕES
// function sayHello(name) {
//     console.log(`salve ${name}`)
// }

// sayHello("Maria")



//AULA RETORNO
// function sum(n1, n2){
//     return result = n1 + n2
// }
// console.log(sum(1,1))


//AULA OBJ ARGUMENTS
//  function sum(){

//      let res = 0 // res = n no for
//      //arguments
//      for (const n of arguments) { //const n (res) dos arguments
//          res += n //vai pegar o valor da posicao n no array e adicionar somando na var res
//      }
//      return res
//  }
//  console.log(sum(1, 1, 2, 4, 5, 7, 4 ,3, 5)) 

// function sum(n1, n2){
//     //arguments
//     for (const n of arguments) {
//         console.log(n) //retorna todos os valores que tem nos arguments
//     }
//     return n1 + n2
// }
// console.log(sum(1,1, 2, 4, 5, 7, 4 ,3, 5)) 






//AULA FUNÇÕES - VALOR VS REFERENCIA 
// function mult(n) {
//     n *= n 
//     return n
// }

// let n = 10 //esse N é diferente do q está na função, se eu chamar apenas ele console.log(n) vai ser igual a 10 pois, o que está no escopo nao vaza
// console.log(mult(n)) //aqui será igual a 100

// //////

// function multObj(obj) { //referencia, reflete no objeto passado como parametro  
//     obj.value *= obj.value
//     return obj
// }

// const numObj = {value: 10}
// console.log(multObj(numObj))
//console.log(numObj) //tratando como objeto, o valor ira alterar dentro e fora do escopo, alterando em todas as variaveis ligadas




//AULA FUNÇÕES - ARROW FUNCTIONS
 const mult = (n) => (n *= n)
 let n = 10