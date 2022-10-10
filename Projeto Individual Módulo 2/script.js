const selecione = document.querySelector(".select");
const btn = document.querySelector("button");
const radiobtn = document.querySelector(".radio-button");
const incremento = document.querySelector(".chave-container");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");

// Incremento da Cifra de César
selecione.addEventListener("click", function () {
  if (selecione.value == "cifra") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
});

// base64

function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codificar.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

// Cifra de César

function cifraCesar() {
  let msg = document.querySelector("#mensagem").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = "";

  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        saida += String.fromCharCode(
          ((msg.charCodeAt(i) + chave - 65) % 26) + 65
        );
      } else {
        saida += String.fromCharCode(
          ((msg.charCodeAt(i) + chave - 97) % 26) + 97
        );
      }
    }
    return saida;
  } else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode(
          ((msg.charCodeAt(i) - 97 - chave + 26) % 26) + 97
        );
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode(
          ((msg.charCodeAt(i) - 65 - chave + 26) % 26) + 65
        );
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}

// Função do botão de copiar texto
function copiaTexto() {
  textoSaida.select();
  document.execCommand("copy");
  alert("Copiado para área de Transferência.");
}

// Botão de codificar e decodificar
radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "<h4>Codificar Mensagem!</h4>";
  } else if (decodificar.checked) {
    btn.innerHTML = "<h4>Decodificar Mensagem!</h4>";
  }
});

// Evento de aparição
btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    textoSaida.innerText = base64();
    document.getElementById("areaBotao").innerHTML =
      '<button id="botaoCopia" class="botao2" onclick="copiaTexto()"><h4>Copiar</h4></button>';
  } else if (selecione.value === "cifra") {
    textoSaida.innerText = cifraCesar();
    document.getElementById("areaBotao").innerHTML =
      '<button id="botaoCopia" class="botao2" onclick="copiaTexto()"><h4>Copiar</h4></button>';
  }
});
