const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const relogio = setInterval(exibirRelogio, 1000);

carregarBackground();

function carregarBackground() {
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 6 && hora < 12) {
        document.body.style.backgroundImage = "url('dia.jpg')";
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundImage = "url('tarde.jpg')";
    } else {
        document.body.style.backgroundImage = "url('noite.jpg')";
    }
}


function exibirRelogio() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

