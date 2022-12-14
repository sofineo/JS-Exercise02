// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

const students = [
  {
    name: `Ann`,
    score1: 7,
    score2: 7,
  },
  {
    name: `Ben`,
    score1: 5,
    score2: 7,
  },
  {
    name: `John`,
    score1: 7,
    score2: 8,
  }
]

function grade(score1, score2) {
  return (score1 + score2)/2
}


for (index = 0; index < students.length; index++) {

    let result = grade(students[index].score1,students[index].score2) >= 7 ? 'Congratulations, you passed!' : 'Sorry, but you fail. Better luck next time!'

    alert (`${students[index].name}, your score is ${grade(students[index].score1,students[index].score2)}. ${result}
    `)
}

// index = 0

// while (index < students.length) {

//   let result = grade(students[index].score1,students[index].score2) >= 7 ? 'Congratulations, you passed!' : 'Sorry, but you failed. Better luck next time!'

//   alert (`${students[index].name}, your score is ${grade(students[index].score1,students[index].score2)}. ${result}`)

//   index++
// }