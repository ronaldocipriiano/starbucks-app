const imagem = document.querySelector(".starbucks");
const circulo = document.querySelector(".circulo");
const likeButton = document.querySelector(".like-button");

function trocaImagem(endereco, cor) {
    imagem.src = endereco;
    trocaCor(cor);
}

function trocaCor(cor) {
    circulo.style.background = cor;
}

likeButton.addEventListener("click", function() {
    alert("Obrigado pelo seu like!");
});
