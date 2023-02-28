//IIFE - Immediately invoked function expression


(function(idade, peso, altura) {
    const sobrenome = 'Palmeira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Ana'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);



/*
(function() {
    const nome = ' Antonia';
    console.log(nome);
})();

const nome = 'Qualquer coisa';
*/

/*
function qualquerCoisa() {
    console.log(11123455);
}
qualquerCoisa();
*/