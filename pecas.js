// encontro remoto 1 logica de programacao full-stack
// codificando um sistema de contagem de peças

let pesoPeca = 300 //peso deve ser maior que 100
let nomePeca = "disco" //tamanho do nome deve ser maior que 2 caracteres
let quantidadePecas = 9 //quantidade de peças não pode ser maior que 10

if (pesoPeca >= 100) {
    console.log("Peso ok, a peça pode ser cadastrada")

    if (nomePeca.length > 2) {
        console.log("nome ok") 
        
        if (quantidadePecas < 10) {
            console.log ("Peça cadastrada com sucesso")
            
        }else {
            console.log("Quantidade de peças excedida, não é possivel cadastrar mais peças")
        }
        
    }else {
        console.log("o nome da peça tem menos de 3 caracteres e não pode ser cadastrada")
    }
    
}else{
    console.log("Peso inferior a 100g, a peça não pode ser cadastrada")
}