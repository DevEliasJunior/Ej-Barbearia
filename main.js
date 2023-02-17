let botaoAgendar = document.querySelector('.botao--agendar');
let modalbg = document.querySelector('.modal--bgshadow');

const totalSlides = document.querySelectorAll('.slider--item').length ;
let CurrentSlides = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('#btn--voltar').addEventListener('click', (event) => {
    event.preventDefault()
    modalbg.style.display = 'none';
    modalbg.style.opacity = '';
});


function aparecerModal(){
    modalbg.style.display = 'flex';
    setTimeout(()=>{
        modalbg.style.opacity = '1';
    }, 100)
}

function updateSlide (){
    CurrentSlides++;
    if(CurrentSlides > (totalSlides - 1)){
        CurrentSlides = 0 ;
    }
    updateMargin()
}

function updateMargin (){
    let newMargin = CurrentSlides * document.querySelector('.slider--item').clientWidth ;
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(updateSlide, 4000)

function abrirMenu(){
    document.querySelector('.menu--nav').style.marginRight = '0px';
}

function fecharMenu () {
    document.querySelector('.menu--nav').style.marginRight = '-230px';
}