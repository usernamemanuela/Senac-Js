// ("caso")
// let Pokémon = prompt ("digite um pokémon")
// switch (Pokémon){
//     case 'Bulbasauro':
//         console.log ('planta e veneno')
//         break
//     case 'Charmander':
//         console.log ('fogo')
//         break
//     case 'Squirtle':
//         console.log ('água')
//         break
//     default:
//         console.log('pokémon não encontrado')
//         break
// }

// ("while = enquanto")
// let estomago = 0;
// while (estomago < 100) {
//     console.log("quero mais coxinhas");
//     estomago = estomago + 10; 
// }

// const numeros = [14, 67, 89, 15, 23]
// for (let numero of numeros ){
// console.log (numero)
// }

// ("${}")
// let nome = prompt ("Qual o seu nome?")
// let cor = prompt ("Qual a sua cor favorita?")
// console.log (`A cor favorita da/do ${nome} é ${cor}`)
 
// ("Quantas letras tem o nome")
// const nomezinho = "Manuelinha"
// console.log(nomezinho.length) // 11

// ("letras ficam maiusculas")
// const frase= "oieeEeEeE"
// const fraseMaiuscula = console.log (frase.toUpperCase())

// ("letras ficam minusculas")
//  let usuario = (prompt("qual o seu usuario?"))
// let senha = (prompt("qual a sua senha?"))
// let ambos = (usuario, senha)
// const fraseMaiuscula = console.log (ambos.toLowerCase())

// ("tirar espaço")
// const email = "   manu@gmail.com   "
// console.log (email.trimEnd())

// ("retorna oq tem na lista")
// lista e retorna quantas frutas tem na lista
// const frutas = ["banana", "melancia", "laranja", "maça", "limão"]
// console.log (frutas.length)

// ("verdadeiro e falso oq tem na lista")
// const seriesBoas = ["Breaking Bad", "Brookling nine-nine"]
// seriesBoas.includes("Brookling nine-nine")
// seriesBoas.includes("Bob esponja")
// console.log(seriesBoas.includes ("Brookling nine-nine"))

// ("push adiciona na ultima posiçao")
// const numeros = [1, 2, 3]
// numeros.push(4)
// console.log(numeros.length)

// numeros.push (5, 6, 7)
// console.log(numeros.length)

// ("lengh para contar quantas letras tem")
// let nome = "manuela"
// console.log (nome.length)

// ("pop para tirar o ultimo elemento") 
// const meusPeixes = ["palhaço", "mandarim", "esturjão"]
// meusPeixes.pop()
// console.log (meusPeixes)

// ("funções") 
// function imprimirOlaMundo(){
//     console.log("Olá mundo!")
// }
// imprimirOlaMundo

// ("escopo global e local")
// const a = 1
// function imprimeVariavel(){
//     const b = 2
//     console.log('variavel a', a)
//     console.log('variavel b', b)
// }
// imprimeVariavel()
// console.log('variavel a', a)
// console.log('variavel b', b)

// ("retorno da função")
function calcularArea(altura, largura){
    const area = altura*largura
    return area
}
//atribui retorno a uma varaiavel
somaNumeros(2,3)
console.log (somaNumeros(2,3));
let variavel = soma(2,3);
let novaSoma = soma(2,3) + 3;
soma(soma(2,3), 3);

// ("funcoes")
function trocaValores(lista){
    const novaLista = []

    novaLista.push(lista[0] /2);
    novaLista.push(lista[1] /2);

    return novaLista
}

const lista = [8,12,8,2,6,10];
console.log(trocaValores(lista));



let menu = Number (prompt("1- Depositar\n 2- Sacar\n 3- Cadastrar Cliente\n 4- Listar Cliente \n 5- Exibir Saldo\n 0- Sair"))

while (menu != 0){

    menu = Number (prompt("1- Depositar\n 2- Sacar\n 3- Cadastrar Cliente\n 4- Listar Cliente \n 5- Exibir Saldo\n 0- Sair"))

}

