function clock() {

    const official = new Date();

    const hours = official.getHours();
    const minuten = official.getMinutes();



    const minutos = document.querySelector('.container-clock .minuten')
    const horas = document.querySelector('.container-clock .hours')



    minutos.textContent = ` ${minuten}`
    horas.textContent = `${hours}:`
}

setInterval(clock, 1000)