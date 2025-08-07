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

carro.addEventListener('click', function(mostrarcarro) {
    if (carrinhoflutuante.style.display === "none" || carrinhoflutuante.style.display === "") {
        carrinhoflutuante.style.display = "block";
    } else {
        carrinhoflutuante.style.display = "none";
    }
})