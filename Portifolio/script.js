function carregarBarra(){
    const barra = document.querySelectorAll(".valor");
    for(var i=0; i<6; i++){
        const barra = document.querySelectorAll(".valor");
        barra[i].classList.add("animationCarregar");    
    }
}

const url1 = "https://github.com/LucasTR85"
const url2 = "https://www.linkedin.com/in/lucastr85/"
const btn1 = document.getElementById("btnGitHub")
const btn2 = document.getElementById("btnLinkedIn")

function openInNewTab(url){
    const win = window.open(url, '_blank');
    win.focus;
}

btn1.addEventListener('click', ()=>{
    openInNewTab(url1)}
)

btn2.addEventListener('click', ()=>{
    openInNewTab(url2)
})
