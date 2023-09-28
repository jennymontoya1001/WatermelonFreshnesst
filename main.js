let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

const tarjetas = document.querySelectorAll('.tarjeta');
const modales = document.querySelectorAll('.modal');
const btnCerrars = document.querySelectorAll('.btn-cerrar');
 
tarjetas.forEach((tarjeta, index) => {
  tarjeta.addEventListener('click', () => {
    modales[index].classList.add('explosion');
    modales[index].style.display = 'block';
  });
});
 
btnCerrars.forEach((btnCerrar) => {
  btnCerrar.addEventListener('click', () => {
    const modal = btnCerrar.closest('.modal');
    modal.classList.remove('explosion');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  });
});