const detalhes_div = document.getElementById('detalhes')
const boltar_botao = document.getElementById('voltar')

boltar_botao.addEventListener('click', ()=>{
    window.location.href = '../'
})


function perfil_jogador(){
    detalhes_div.innerHTML = `
    <img src="${localStorage.getItem('@Imagem')}">
    <h1>${localStorage.getItem('@Nome')}</h1>
    <h2>${localStorage.getItem('@Posicao')}</h2>
    <p>${localStorage.getItem('@Descricao')}</p>
    <strong>Nome completo: </strong> <span> ${localStorage.getItem('@NomeCompleto')} </span>
    
    `;
}

window.onload = () => {
    perfil_jogador()
}