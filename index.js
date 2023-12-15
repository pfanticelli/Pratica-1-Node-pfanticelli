const prompt = require('prompt-sync')();

/*IMPORTE AQUI O ARQUIVO verificaIdade.js*/
const cadastro = require('./verificaIdade.js');

let eleitor = undefined;

while (true){
    var nome = prompt('Nome completo: ');
    var rg = prompt('RG: ');
    var cpf = prompt('CPF: ');
    var nascimento = prompt('Nascimento: ');

    if(cadastro.eMaior(nascimento)){
       eleitor = prompt('Título de eleitor: ');
    }

    console.log('\n• Nome:', nome);
    console.log('• RG:', rg);
    console.log('• CPF:', cpf);
    console.log('• Data de Nascimento:', nascimento);
    console.log('• Eleitor: ', eleitor);

    var confirm = prompt('\nConfirma?');

    if(confirm == 'S' || confirm == 's'){
        break;
    }else{
        console.clear();
    }

}