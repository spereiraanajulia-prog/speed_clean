// Carrossel promoçoes
var radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000);

function proximaImg(){
    cont++

    if(cont > 2){
        cont = 1
    }
    document.getElementById('radio' + cont).checked = true
}


// Menu hamburguer
function clickMenu() {
    let itens = document.getElementById('itens');
    if (itens.style.display === 'flex') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'flex';
    }
}

// carrossel depoimentos mobile
var swiper = new Swiper(".swiper", {
    loop: true, 
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });
  
