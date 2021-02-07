const pedal = document.querySelector('#zPedal');
const timon = document.querySelector('#zTimon')
const asiento = document.querySelector('#zAsiento')
const aro = document.querySelector('#zAro')
const img = document.querySelector('#Img')
// Articulos
const A_pedal = document.querySelector('.pedal');
const A_timon = document.querySelector('.timon')
const A_asiento = document.querySelector('.asiento')
const A_aro = document.querySelector('.aro')

pedal.addEventListener('click',zoomPedal);
timon.addEventListener('click',zoomTimon);
asiento.addEventListener('click',zoomAsiento);
aro.addEventListener('click',zoomAro);

// Funciones de Articulos

function zoomPedal(){
    img.classList.toggle('pedal');
    pedal.classList.toggle('active');
    A_pedal.classList.toggle('active');
    timon.classList.toggle('disable');
    aro.classList.toggle('disable');
    asiento.classList.toggle('disable');
}

function zoomTimon(){
    pedal.classList.toggle('disable');
    img.classList.toggle('timon');
    timon.classList.toggle('active');
    A_timon.classList.toggle('active');
    aro.classList.toggle('disable');
    asiento.classList.toggle('disable');
}

function zoomAsiento(){
    pedal.classList.toggle('disable');
    timon.classList.toggle('disable');
    img.classList.toggle('asiento');
    asiento.classList.toggle('active');
    A_asiento.classList.toggle('active');
    aro.classList.toggle('disable');
}

function zoomAro(){
    pedal.classList.toggle('disable');
    timon.classList.toggle('disable');
    asiento.classList.toggle('disable');
    img.classList.toggle('aro');
    aro.classList.toggle('active');
    A_aro.classList.toggle('active');
}