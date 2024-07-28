// ### Funcionalidades:

// [x] O usuário pode escolher entre Pedra, Papel e Tesoura.
// [x] O computador faz uma escolha aleatória.
// [x] O jogo determina o vencedor da rodada.
// [ ] O jogo exibe o resultado da rodada e atualiza o contador de vitórias.
// [ ] O jogo pode ser reiniciado.
// [x] Aplicar o alert do Bootstrap invés do windowAlert
// [ ] media de vitorias do computador e usuario

var vitoriasUsuario = 0;
var vitoriasPc = 0;
var totalVitoriasUsuario = 0;
var rodadas = 0;


function fazerEscolha(escolhaUsuario){
  const escolhas = ['pedra', 'papel', 'tesoura'];
  const escolhaPc = escolhas[Math.floor(Math.random() * escolhas.length)]

  var result = ''
  var alert = ''
  rodadas ++

  if(escolhaPc === escolhaUsuario) {
    result = 'EMPATE!'
    alert = 'warning'
    media()
  } else if (
    (escolhaUsuario === 'pedra' && escolhaPc === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaPc === 'pedra') || 
    (escolhaUsuario === 'tesoura' && escolhaPc === 'papel')
  ) {
    result = 'VOCÊ GANHOU!'
    alert = 'success'
    vitoriasUsuario ++
    totalVitoriasUsuario ++
    media()
  } else {
    result = 'VITÓRIA DO PC!'
    alert = 'danger'
    vitoriasPc ++ 
    media()
  }


  document.getElementById('result').innerHTML = `<div class="alert alert-${alert}"> Você escolheu ${escolhaUsuario} e o computador ${escolhaPc}.<br> ${result}</div>`
  document.getElementById('vitoriasUsuario').innerText = vitoriasUsuario
  document.getElementById('vitoriasPc').innerText = vitoriasPc
}


function resetarJogo(){
  vitoriasPc = 0
  vitoriasUsuario = 0
  document.getElementById("result").innerHTML = ''
  document.getElementById('vitoriasUsuario').innerText = vitoriasUsuario
  document.getElementById('vitoriasPc').innerText = vitoriasPc
  document.getElementById("media").innerHTML =''
  rodadas = 0;
  totalVitoriasUsuario = 0;
}


function media(){
  var media = totalVitoriasUsuario/rodadas
  var mediaFixada = media.toFixed(2)

  if(rodadas >= 2) {
    document.getElementById("media").innerHTML = `<div class="media alert alert-dark"> Em ${rodadas} rodadas a sua média de vitórias é: ${mediaFixada}</div>`
  }
}

