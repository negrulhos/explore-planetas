// Procure e selecione o elemento com a classe card-destino
// e guarde em uma variável chamada primeiroCard
let primeiroCard = document.querySelector('.card-destino');

// Procure e selecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");

// Procure e selecione o parágrafo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade");

/* Monitore o clique no botão de curiosidade e, quando acontecer
o clique, verifique SE a curiosidade está oculta.
Se estiver, faça ficar visível, mude o aria-expanded para true
e troque o texto do botão para "Ocultar curiosidade". */
botaoCuriosidade.addEventListener('click', function(){
    
    // Se curiosidade estiver oculto (hidden)
    if(curiosidade.hidden){
        // Faça-o aparecer
        curiosidade.hidden = false;

        // Mude o atributo aria-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true");

        // Troque o texto do botão para Ocultar curiosidade
        botaoCuriosidade.textContent = "Ocultar curiosidade";
    } else { // Senão, volte tudo (esconda curiosidade, aria false e texto original)
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded", "false");
        botaoCuriosidade.textContent = "Ver curiosidades";
    }

});
