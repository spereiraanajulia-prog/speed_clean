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

const slider   = document.querySelector(".slider-comp input");
const img2     = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider-comp .drag-line");

slider.oninput = () => {
  let val = slider.value;

  img2.style.widthheight   = val + "%";
  dragLine.style.lefttop  = val + "%";
};


new Swiper('.card-wrapper', {

  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
