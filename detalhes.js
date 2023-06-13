const div_detalhes_foto = document.getElementById('detalhes_foto');

jogadores.forEach((ele) => {
  const jogador_div = document.createElement('div');

  const jogador_imagem = document.createElement('img');
  jogador_imagem.src = ele.imagem;
  jogador_imagem.alt = ele.nome;

  const jogador_nome = document.createElement('p');
  jogador_nome.textContent = ele.nome;

  jogador_div.appendChild(jogador_imagem);
  jogador_div.appendChild(jogador_nome);

  jogador_imagem.addEventListener('click', function() {
    const imagemDetalhes = document.createElement('img');
    imagemDetalhes.src = ele.imagem;
    imagemDetalhes.alt = ele.nome;

    div_detalhes_foto.innerHTML = '';
    div_detalhes_foto.appendChild(imagemDetalhes);
  });

  div_detalhes_foto.appendChild(jogador_div);
});
