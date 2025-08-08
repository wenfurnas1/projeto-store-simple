function rolarParaEsquerda() {
    const a = document.querySelector(".vitrine");
    a.scrollLeft -= 950;
}

function rolarParaDireita() {
    const a = document.querySelector(".vitrine");
    a.scrollLeft += 950;
}

const carro = document.querySelector("#carro");
const carrinhoflutuante = document.querySelector("#carrinhoflutuante");

carro.addEventListener('click', function() {
    if (carrinhoflutuante.style.display === "none" || carrinhoflutuante.style.display === "") {
        carrinhoflutuante.style.display = "block";
    } else {
        carrinhoflutuante.style.display = "none";
    }
});
window.addEventListener("DOMContentLoaded", () => {

    class ItemCarrinho {
        constructor(nome, preco) {
            this.nome = nome;
            this.preco = preco;
        }
    }

    const notification = document.querySelector("#notification")
    const vetorCarrinho = [];

    const botoesCarrinho = document.querySelectorAll('.carrinho');
    const flutuant = document.querySelector('#carrinhoflutuante');

    botoesCarrinho.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const card = botao.closest('.card');
            const nomeProduto = card.querySelector('h2').innerText;
            const precoProduto = card.querySelector('.price').innerText;

            const item = new ItemCarrinho(nomeProduto, precoProduto);
            vetorCarrinho.push(item);
            notification.style.display = block;
            flutuant.innerHTML = vetorCarrinho.map(produto => `
                <p>${produto.nome} - ${produto.preco}</p>
            `).join('');
        });
    });

});