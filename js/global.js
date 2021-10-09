//imagem da lâmpada acesa
// http://i.stack.imgur.com/ybxlO.jpg

// imagem da lâmpada apagada
// http://i.stack.imgur.com/b983w.jpg

//imagem da lâmpada quebrada
// http://i.stack.imgur.com/MRjsF.jpg

let cont = 0
const image = document.querySelector('img[alt="lampada"]')
const botao = document.querySelector('button.btn')
botao.addEventListener('click', function(){
  if(botao.textContent == "apagar") {
    botao.textContent = "acender"
    image.src = "http://i.stack.imgur.com/b983w.jpg"
  } else if(botao.textContent == "trocar lampada") {
    cont = 0
    botao.textContent = "acender"
    image.src = "http://i.stack.imgur.com/b983w.jpg"
  } else {
    image.src = "http://i.stack.imgur.com/ybxlO.jpg"
    botao.textContent = "apagar"
    cont++
  }
  if (cont === 5) {
    botao.textContent = "trocar lampada"
    image.src = "http://i.stack.imgur.com/MRjsF.jpg"
  }
})