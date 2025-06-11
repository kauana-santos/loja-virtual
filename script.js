const btnMenu = document.querySelector('.menu-btn');

btnMenu.addEventListener("click", () => {
    let menuMobile = document.querySelector('.mobile-menu');

    if( menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./estilos/assets/hamburger.png";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./estilos/assets/x.png";
    }
})

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready()
}

function ready() {
    
    const btnRemover = document.getElementsByClassName("btn-remover");
    for (var i = 0; i< btnRemover.length; i++){
        btnRemover[i].addEventListener("click", (event) => {
            event.target.parentElement.parentElement.remove();
            atualizarTotal();
        });
    }

    const quantInput = document.getElementsByClassName("btn-quant")
    for(var i=0; i < quantInput.length; i++){
        quantInput[i].addEventListener("change", atualizarTotal)
    }

    const addCarrinho = document.getElementsByClassName("add-carrinho")
    for( var i = 0; i < addCarrinho.length; i++){
        addCarrinho[i].addEventListener("click", addProdNoCarrinho)
    }

}

function addProdNoCarrinho (event){
    const button = event.target;
    const prodInfo = button.parentElement.parentElement.parentElement
    const prodImagem = prodInfo.getElementsByClassName("prod-foto")[0].src
    const prodTitulo = prodInfo.getElementsByClassName("prod-nome")[0].innerText
    const prodValor = prodInfo.getElementsByClassName("valor")[0].innerText
    
    
    let newProd = document.createElement("tr")
    newProd.classList.add("desc-prod")
    

    newProd.innerHTML =
    `
    <td><img src="${prodImagem}" alt="${prodTitulo}" class="foto-prod"></td>
    <td>${prodTitulo}</td>
    <td class="prod-preco">${prodValor}</td>
    <td><input type="number" class="btn-quant" min="1" value="1"></td>
    <td><button class="btn-remover">Remover</button></td>
    `;

    const tableBody = document.querySelector("table tbody");

    tableBody.appendChild(newProd);
    atualizarTotal()
    ready()
}


function atualizarTotal () {
    let total = 0;
    const carrinhoProd = document.getElementsByClassName("desc-prod");

    for (var i = 0; i< carrinhoProd.length;i++){

        const prodPreco = carrinhoProd[i].getElementsByClassName("prod-preco")[0].innerText;

        const prodQuant =  carrinhoProd[i].getElementsByClassName("btn-quant")[0].value;
        console.log(prodQuant);

        total += (prodPreco * prodQuant)
    }

    total = total.toFixed(2);
    document.querySelector(".total span").innerText = "R$" + total;
}

const cartIcone = document.querySelector(" button .cart-icone")
const carrinho = document.querySelector(" .section-carrinho")
const homeSec = document.querySelector("#home")
const sobreSec = document.querySelector("#sobre")
const produtos2Sec = document.querySelector("#produtos-2")

cartIcone.addEventListener("click", () => {
    carrinho.style.display = "flex";
    homeSec.style.display = "none";
    sobreSec.style.display = "none";
    produtos2Sec.style.display = "none";
})

const btnHome = document.querySelector(".nav-item a")
btnHome.addEventListener("click", (event) =>{
    event.preventDefault()
    carrinho.style.display = "none";
    homeSec.style.display = "flex";
    sobreSec.style.display = "flex";
    produtos2Sec.style.display = "flex";
})

console.log(btnHome)