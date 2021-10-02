var cartas = [
  (jim = {
    nome: "Jim",
    imagem:
      "https://rollingstone.uol.com.br/media/_versions/john-krasinski-the-office_reproducao_widelg.jpg",
    atributos: {
      força: 4,
      velocidade: 8,
      defesa: 6
    }
  }),
  (dwight = {
    nome: "Dwight",
    imagem:
      "https://rollingstone.uol.com.br/media/uploads/the_office_dwight_treinamento.jpg",
    atributos: {
      força: 7,
      velocidade: 5,
      defesa: 8
    }
  }),
  (michael = {
    nome: "Michael",
    imagem:
      "http://s2.glbimg.com/-9lG_NCCu26MsBAWtrWHr5Cl7Ag=/620x413/smart/e.glbimg.com/og/ed/f/original/2017/12/19/michael-scott-the-office.png",
    atributos: {
      força: 4,
      velocidade: 3,
      defesa: 2
    }
  }),
  (roy = {
    nome: "Roy",
    imagem:
      "https://imagez.tmz.com/image/a0/4by3/2020/04/27/a07eb48dbe8241f5b7fac25f718e0145_md.jpg",
    atributos: {
      força: 9,
      velocidade: 4,
      defesa: 5
    }
  }),
  (pam = {
    nome: "Pam",
    imagem:
      "https://rollingstone.uol.com.br/media/_versions/pam-the-office-jenna-fischer-foto-reproducao_widelg.jpg",
    atributos: {
      força: 4,
      velocidade: 5,
      defesa: 3
    }
  }),
  (kevin = {
    nome: "Kevin",
    imagem:
      "https://www.bosshunting.com.au/wp-content/uploads/2020/12/Cameo-Top-Earner-2020-Kevin-Malone-The-Office-_-Brian-Baumgartner-1200x640.jpg",
    atributos: {
      força: 5,
      velocidade: 1,
      defesa: 8
    }
  }),
  (angela = {
    nome: "Angela",
    imagem:
      "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/08/20/22/43/37203820.jpg",
    atributos: {
      força: 1,
      velocidade: 8,
      defesa: 6
    }
  }),
  (darryl = {
    nome: "Darryl",
    imagem:
      "https://tv-fanatic-res.cloudinary.com/iu/s--CkAOVCGM--/c_scale,f_auto,h_1044,q_auto,w_696/v1371215181/darryl-as-a-vampire",
    atributos: {
      força: 9,
      velocidade: 3,
      defesa: 6
    }
  }),
  (ryan = {
    nome: "Ryan",
    imagem: "https://cdn.jwplayer.com/v2/media/46qsexlL/poster.jpg?width=720",
    atributos: {
      força: 4,
      velocidade: 8,
      defesa: 2
    }
  })
];

var cartaMaquina;
var cartaPlayer;
reiniciarGame();

function reiniciarGame() {
  divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.innerHTML = "";
  divCartaMaquina.style = "";
}

function sortearCarta() {
  reiniciarGame();
  cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];
  cartaPlayer = cartas[parseInt(Math.random() * cartas.length)];
  while (cartaPlayer == cartaMaquina) {
    cartaPlayer = cartas[parseInt(Math.random() * cartas.length)];
  }

  document.getElementById("btnSortear").disabled = true;
  exibirOpcoes();
  exibirCartaPlayer();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaPlayer.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  document.getElementById("btnJogar").disabled = false;
}

function exibirCartaPlayer() {
  var divCartaPlayer = document.getElementById("carta-jogador");
  divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaPlayer.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " (" +
      cartaPlayer.atributos[atributo] +
      ")<br>";
  }
  var nome = `<p class= "carta-subtitle">${cartaPlayer.nome}</p>`;
  divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributo");
  for (i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
  return radioAtributos[parseInt(Math.random() * 3)].value;
}

function jogar() {
  var atributoSelected = obtemAtributo();
  var valorPlayer = cartaPlayer.atributos[atributoSelected];
  var valorMaquina = cartaMaquina.atributos[atributoSelected];
  var resultado = document.getElementById("resultado");
  if (valorPlayer > valorMaquina) {
    divResultado = "<p class='resultado-final'>Você Venceu!</p>";
  } else if (valorPlayer < valorMaquina) {
    divResultado = "<p class='resultado-final'>Você Perdeu!</p>";
  } else {
    divResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  resultado.innerHTML = divResultado;
  exibirCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " (" +
      cartaMaquina.atributos[atributo] +
      ")</p>";
  }
  var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}