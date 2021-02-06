const pedal = document.querySelector('#zPedal');
const timon = document.querySelector('#zTimon')
const asiento = document.querySelector('#zAsiento')
const aro = document.querySelector('#zAro')
const img = document.querySelector('#Img')

pedal.addEventListener('click',zoomPedal);
timon.addEventListener('click',zoomTimon);
asiento.addEventListener('click',zoomAsiento);
aro.addEventListener('click',zoomAro);

function zoomPedal(){
    img.classList.toggle('pedal');
    pedal.classList.toggle('active');
    timon.classList.toggle('disable');
    aro.classList.toggle('disable');
    asiento.classList.toggle('disable');
}

function zoomTimon(){
    pedal.classList.toggle('disable');
    img.classList.toggle('timon');
    timon.classList.toggle('active');
    aro.classList.toggle('disable');
    asiento.classList.toggle('disable');
}

function zoomAsiento(){
    pedal.classList.toggle('disable');
    timon.classList.toggle('disable');
    img.classList.toggle('asiento');
    asiento.classList.toggle('active');
    aro.classList.toggle('disable');
}

function zoomAro(){
    pedal.classList.toggle('disable');
    timon.classList.toggle('disable');
    asiento.classList.toggle('disable');
    img.classList.toggle('aro');
    aro.classList.toggle('active');
}