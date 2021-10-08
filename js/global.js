//imagem da lâmpada acesa
// http://i.stack.imgur.com/ybxlO.jpg

// imagem da lâmpada apagada
// http://i.stack.imgur.com/b983w.jpg

//imagem da lâmpada quebrada
// http://i.stack.imgur.com/MRjsF.jpg

const image = document.querySelector('img[alt="lampada"]')
const botao = document.querySelector('button.btn')
botao.addEventListener('click', function(){
  if(botao.textContent == "apagar") {
    botao.textContent = "acender"
    image.src = "http://i.stack.imgur.com/b983w.jpg"
  } else {
    image.src = "http://i.stack.imgur.com/ybxlO.jpg"
    botao.textContent = "apagar"
  }
})