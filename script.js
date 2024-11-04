/* //criar uma função para exibir uma lista de alunos
function listaAlunos(aluno1,aluno2,aluno3,aluno4){
    console.log("Sejam benvindo todos os alunos");
    console.log(aluno1);
    console.log(aluno2);
    console.log(aluno3);
    console.log(aluno4);
}*/

//vampos reescrever a função utilizando o reset operador
/* function listaAlunos(...alunos){
    console.log("Sejam benvindo todos os alunos");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
}
listaAlunos("Adamastor", "Benevides", "Conegundes", "Demerval", "Emengarda");  */

//outro exemplo: sorteador de números primos menores de 20

function sorteadorPrimo(...numeros) {
    console.log(numeros);

    //const numeroSorteado = Math.random()*numeros.length;

    const numeroSorteado = Math.floor(Math.random()*numeros.length)
    console.log(`posição ${numeroSorteado}`);
    console.log(`Número primo: ${numeros[numeroSorteado]}`);
}
sorteadorPrimo(2,3,5,7,11,13,17,19);

function sorteadorNome(...nomes) {
    console.log(nomes);
    

    const nomeSorteado = Math.floor(Math.random()*nomes.length)
    console.log(`posição ${nomeSorteado}`);
    console.log(`Nome do Aluno: ${nomes [nomeSorteado]}`);
}
sorteadorNome("Ana Clara" , "André" , "Bernardo", "Daniel", "Deivid", "Enrique", "Fernanda", "Gabriel R", "Gabriel Z", "Heloise", "Izadora", "Jefte", "João Matheus", "João Maurício", "José Vitor", "Julia", "Kamila", "Karina", "Kevin", "Leonardo F", "Leonardo S", "Lorenzzo", "Lucas", "Matheus", "Nicolas", "Nycolas", "Pedro Portela", "Rafaela", "Raphael", "Rayra", "Valentina", "Vinícius", "Vitor Garret", "Vitor Schuski", "Pedro da Silva", "Ana Luiza");