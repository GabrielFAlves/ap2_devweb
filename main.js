window.onload = () => {
    carregarJogadores()
}

//puxando os elementos
let elencoFeminino = document.getElementById('elenco_fem')

let elencoMasculino = document.getElementById('elenco_masc')




//functions
const carregarJogadores = () => {  
   jogadores.forEach((jogador, indice)=>{
        if(jogador["elenco"] == "feminino"){
            elencoFeminino.innerHTML += `

            <div id="jogador${indice}" onclick="salvarInformacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <h1>${jogador["nome"]}</h1>
            </div>
    
            `;

        } else {
            elencoMasculino.innerHTML += `

            <div id="jogador${indice}" onclick="salvarInformacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <h1>${jogador["nome"]}</h1>
            </div>
    
            `;
        }
        
   })
}





function salvarInformacoes(indiceJogador) {
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