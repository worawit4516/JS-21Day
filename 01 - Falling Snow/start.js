(() => {
    // เริ่มเขียนโค้ด
    function setup() {
        const canvas = document.getElementById("falling-snow-canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return {
            canvas,
            canvasContext: canvas.getContext("2d"),
            numberofSnowballs: 150,
        };
    }

    function CreatSnowballs(canvas, numberofSnowballs) {
        return [...Array(numberofSnowballs)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5, 0.6),
                radius: random(1, 2.5),
                speedx: random(-1, 1),
                speedy: random(1, 5),


            }
        });
    }

    function drawsnowBAll(canvasContext, snowballs) {
        canvasContext.beginPath();
        canvasContext.arc(snowballs.x, snowballs.y, snowballs.radius, 0, Math.PI * 2);
        //canvasContext.rect(snowballs.x, snowballs.y, snowballs.radius, 50);
        canvasContext.fillStyle = `rgba(255, 255, 255, ${snowballs.opacity})`;
        canvasContext.fill();

    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function movesnowballs(canvas, snowballs) {
        snowballs.x += snowballs.speedx;
        snowballs.y += snowballs.speedy;

        if (snowballs.x > canvas.width) {
            snowballs.x = 0;
        } else if (snowballs.x < 0) {
            snowballs.x = canvas.width;
        }

        if (snowballs.y > canvas.height) {
            snowballs.y = 0;
        }

    }

    function run() {
        const { canvas, canvasContext, numberofSnowballs } = setup();
        const snowballs = CreatSnowballs(canvas, numberofSnowballs);
        snowballs.forEach((snowballs) => drawsnowBAll(canvasContext, snowballs));

        setInterval(() => {
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            snowballs.forEach((snowballs) => drawsnowBAll(canvasContext, snowballs));
            snowballs.forEach((snowballs) => movesnowballs(canvas, snowballs));
        }, 50)
    }
    run();
})();