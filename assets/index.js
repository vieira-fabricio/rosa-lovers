
const menuItens = document.querySelectorAll('.collapse a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

//Função para fazer a referência ente o href e o item e pegar o offsetTop.
function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

//Função para lidar com o clique, prevenindo o padão e identificando cada sessão da página.
function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) -89;
    
    scrollToPosition(to)
}

//Função para implementar o scroll suave.
function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

var botao = document.getElementById('botao');
botao.addEventListener('click', function() {
    alert('Obrigado por se inscrever!')
})

