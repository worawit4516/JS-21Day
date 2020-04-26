(() => {
    // เริ่มเขียนโค้ด
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function setelmentinnertext(id, text) {
        const elment = document.getElementById(id);
        elment.innerText = text;
    }

    function countdown() {
        const now = new Date().getTime();
        const newyear = new Date('December 31, 2020 23:59:59').getTime();
        const unixtimeleft = newyear - now;

        // const dayelem = document.getElementById('days');
        // dayelem.innerHTML = Math.floor(unixtimeleft / day);

        setelmentinnertext('days', Math.floor(unixtimeleft / day));
        setelmentinnertext('hours', Math.floor(unixtimeleft % day / hour));
        setelmentinnertext('minutes', Math.floor(unixtimeleft % hour / minute));
        setelmentinnertext('seconds', Math.floor(unixtimeleft % minute / second));










    }


    function run() {
        countdown();
        setInterval(countdown, second);
    }
    run();

})();