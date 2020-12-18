const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numerosArrayDeArrays = [numerosPares, numerosImpares];
console.log(numerosArrayDeArrays); //Array de Arrays

const numerosArrayDestructuing = [...numerosPares, ...numerosImpares];
console.log(numerosArrayDestructuing); //Array único



// const num1 = 1;
// const num2 = 2;
const [num1, num2] = [1, 2];
console.log(num1, num2); // 1, 2

const [num3, num4, ...outros] = [1, 2, 3, 4, 5];
console.log(num3, num4, outros);// 1, 2, [3, 4, 5]



const [nome1 = "Fulano"] = [1];
console.log(nome1); // 1

const [nome2 = "Fulano"] = [];
console.log(nome2); // Fulano



const pessoa = {
    nome: "Fulano",
    sobrenome: "De Tal"
};
console.log(pessoa);

const pessoaComIdade = {
    ...pessoa,
    idade: 30
};
console.log(pessoaComIdade);

const nome = pessoa.nome;
console.log(nome);

const { sobrenome } = pessoa;
console.log(sobrenome);



function imprimeDados({nome, idade}){
    console.log(nome, idade);
}
imprimeDados(pessoaComIdade);