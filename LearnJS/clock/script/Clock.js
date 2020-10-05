setInterval(() => {
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hrotation = 30 * hours + minutes / 2; // 12hr=360deg=>1hr=30deg; and 60 min=30deg so 1min=so min/2
    mrotation = 6 * minutes; // 60min=360deg so 1min=6deg
    srotation = 6 * seconds; // 60 sec=360deg=>1sec=6deg

    document.querySelector('.hour').style.transform = `rotate(${hrotation}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${mrotation}deg)`;
    document.querySelector('.second').style.transform = `rotate(${srotation}deg)`;


}, 1000);