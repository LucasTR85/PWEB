function abrir(imagem) {
    imagem.src = './janelaaberta.png'
    document.getElementById("text").innerHTML = "Feche a janela!"
}

function sair(imagem) {
    imagem.src = './janelafechada.png'
    document.getElementById("text").innerHTML = "Abra a janela!"
}

function clicar(imagem) {
    imagem.src = './janelaquebra.png'
    document.getElementById("text").innerHTML = "Quebrou a janela!"
}