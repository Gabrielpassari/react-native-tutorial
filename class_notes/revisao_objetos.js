var idade = 10

let escolha = "email"

const user = {
    nome: "Renan",
    email: "renancavichi@gmail.com",
    idade: 41,
    "sobre nome": "Cavichi"
}

console.log(user.nome) // Renan
console.log(user["nome"])  // Renan

console.log(user["sobre nome"]) // Cavichi

console.log(user[escolha])

const props = {
    avatar:"https://github.com/renancavichi.png",
    name: "Renan Cavichi",
    email: "renancavichi@gmail.com"
}

//const avatar = props.avatar
//const name = props.name
//const email = props.email

const {avatar, email} = props

console.log(avatar) // "https://github.com/renancavichi.png"
console.log(email) // "renancavichi@gmail.com"