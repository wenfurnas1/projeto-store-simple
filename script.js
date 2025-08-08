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

    const vetorCarrinho = [];

    const botoesCarrinho = document.querySelectorAll('.carrinho');
    const flutuant = document.querySelector('#carrinhoflutuante');

    botoesCarrinho.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const card = botao.closest('.card');
            const nomeProduto = card.querySelector('h2').innerText;
            const precoProduto = parseFloat(
                card.querySelector('.price').innerText
                .replace('R$', '')
                .replace(',', '.')
                .trim()
            );

            const item = new ItemCarrinho(nomeProduto, precoProduto);
            vetorCarrinho.push(item);


            let somador = 0;
            for (let i = 0; i < vetorCarrinho.length; i++) {
                somador += vetorCarrinho[i].preco;
            }




            flutuant.innerHTML = vetorCarrinho.map(produto => `
                <p>${produto.nome} - R$${produto.preco}
                <strong>Valor Total: R$${somador.toFixed(2)}</strong>
                
                </p>
            `).join('');
        });



    });
    let valortotal = flutuant;



});