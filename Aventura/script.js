const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual2 = document.querySelector('.ativo'); // Mudando para 'atual2'
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual2.classList.remove('ativo'); // Referência a 'atual2'
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
