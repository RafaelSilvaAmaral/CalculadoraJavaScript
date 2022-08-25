function display(n) {
    document.form.res.value = document.form.res.value + n;
}

function resultado() {
    equacao = document.form.res.value;
    if (equacao != '')
        document.form.res.value = eval(equacao);
}

function limpar() {
    document.form.res.value = '';
}

function apagarcaracter() {
    equacao = document.form.res.value;
    document.form.res.value = equacao.slice(0, -1);
}