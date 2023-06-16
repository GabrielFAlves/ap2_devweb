window.onload = () => {
    lerInfos()
}

let divDetalhes = document.getElementById('detalhes')
let btvoltar = document.getElementById('voltar')

btvoltar.addEventListener('click', ()=>{
    window.location.href = '../'
})


function lerInfos(){
    divDetalhes.innerHTML = `
    <img src="${localStorage.getItem('@Imagem')}">



    <h1>${localStorage.getItem('@Nome')}</h1>
    <h2>${localStorage.getItem('@Posicao')}</h2>
    <p>${localStorage.getItem('@Descricao')}</p>
    <strong>Nome completo: </strong> <span> ${localStorage.getItem('@NomeCompleto')} </span>
    
    `;
}