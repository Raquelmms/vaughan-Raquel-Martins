// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const apenasNumPares = array.filter((num) =>{
      return num % 2 === 0
  })
  return apenasNumPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const apenasNumerosPares = array.filter((num) =>{
        return num % 2 === 0
    })
    let numero =[]
   for(num of apenasNumerosPares){
       const calculo = num ** 2
       numero.push(calculo)
   }
   return numero
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for(let i = 1; i < array.length; i++){
        if(maiorNumero < array[i]){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objetoValores = {}
let menorNumero  
if(num1> num2){
    objetoValores.maiorNumero = num1
    menorNumero = num2
    
}else{
    objetoValores.maiorNumero = num2
    menorNumero = num1
    
}

objetoValores.maiorDivisivelPorMenor = objetoValores.maiorNumero % menorNumero === 0

objetoValores.diferenca = objetoValores.maiorNumero - menorNumero

return objetoValores

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}