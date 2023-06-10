const div_elenco_masc = document.getElementById('elenco_masc');
const div_elenco_fem = document.getElementById('elenco_fem');

jogadores.forEach(
    (ele) => {
        const jogador_div = document.createElement('div');

        const jogador_imagem = document.createElement('img');
        jogador_imagem.src = ele.imagem;
        jogador_imagem.alt = ele.nome;

        const jogador_nome = document.createElement('p');
        jogador_nome.textContent = ele.nome;
        
        jogador_div.appendChild(jogador_imagem);
        jogador_div.appendChild(jogador_nome);

        if(ele.elenco === 'masculino'){
            div_elenco_masc.appendChild(jogador_div);
        } else if(ele.elenco === 'feminino'){
            div_elenco_fem.appendChild(jogador_div);
        }
    }
);

const redirecionarPagina = function(event) {
    if (event.target.tagName === 'IMG') {
        window.location.href = 'detalhes.html';
    }
    };
  
    div_elenco_masc.addEventListener('click', redirecionarPagina);
    div_elenco_fem.addEventListener('click', redirecionarPagina);