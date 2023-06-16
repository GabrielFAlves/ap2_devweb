const div_elenco_fem = document.getElementById('elenco_fem')
const div_elenco_masc = document.getElementById('elenco_masc')

const carregarJogadores = () => {  
   jogadores.forEach((jogador, indice)=>{
        if(jogador["elenco"] == "feminino"){
            div_elenco_fem.innerHTML += `

            <div id="jogador${indice}" onclick="informacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <h1>${jogador["nome"]}</h1>
            </div>
    
            `;

        } else {
            div_elenco_masc.innerHTML += `

            <div id="jogador${indice}" onclick="informacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <h1>${jogador["nome"]}</h1>
            </div>
    
            `;
        }
   })
}

function informacoes(indiceJogador) {
    const jogador = jogadores[indiceJogador];
    console.log('falhou')
    localStorage.setItem('@Nome', jogador.nome)
    localStorage.setItem('@Imagem', jogador.imagem)
    localStorage.setItem('@Posicao', jogador.posicao)
    localStorage.setItem('@Descricao', jogador.descricao)
    localStorage.setItem('@NomeCompleto', jogador.nome_completo)
    localStorage.setItem('@Nascimento', jogador.nascimento)
    localStorage.setItem('@Altura', jogador.altura);

    window.location.href = './detalhes.html'
}

window.onload = () => {
    carregarJogadores()
}