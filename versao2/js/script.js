// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");

/* Percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botões (botão curiosidade e o botão favoritos) e o paragrafo curiosidade */
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidades";
        }
    }); // fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function(){
        // Aplicar/Remover a classe 'favoritado'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');

        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado";
        } else {
            botaoFavorito.textContent = "☆ Favorito";
        }
    }); // fechamento do botao favorito
}); // fechamento do forEach

// V2: programação para o recurso de filtragem de destinos

// Procurar e selecionar os botões de filtro
const botoesFiltro = document.querySelectorAll("[data-filtro]");
botoesFiltro.forEach(function(botaoFiltro) {

    // Quando acontecer o clique no botão...
    botaoFiltro.addEventListener('click', function() {
        //Descobrir qual filtro foi escolhido
        const filtro = botaoFiltro.dataset.filtro;
        
        // percorrendo cada card...
        cards.forEach(function(card) {
            // guardando a categoria de cada um
            const categoria = card.dataset.categoria;

            // Mostrar todos os cards OU apenas o card da categoria
            if (filtro === "todos" || categoria === filtro) {
                card.hidden = false;
            }

            else {
                card.hidden = true;
            }
        });

        botoesFiltro.forEach(function(botaoFiltro) {
            if (botaoFiltro.dataset.filtro === filtro) {
                botaoFiltro.classList.add("filtro-ativo");
                botaoFiltro.setAttribute("aria-pressed", "true");
            }

            else {
                botaoFiltro.classList.remove("filtro-ativo");
                botaoFiltro.setAttribute("aria-pressed", "false");
            }
        });
    });
});