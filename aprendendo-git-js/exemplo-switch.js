let diaSemana = "quarta"
let corCamiseta

console.log(corCamiseta)

switch (diaSemana) {
    case "segunda":
        console.log("É segunda!")
        corCamiseta = "roxo"
        break

    case "terca":
        console.log("É terça!")
        corCamiseta = "branca"
        break

    case "quarta":
        console.log("É quarta!")
        corCamiseta = "azul"
        break

    default:
        console.log("É algum dia!")
        corCamiseta = "amarelo"
        break
}
console.log(corCamiseta)
