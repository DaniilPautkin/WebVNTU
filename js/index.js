let i = 0

let changeBG = () => {
    !!i ? $("body").css('background', 'darkgrey') : $("body").css('background', 'white')
    i = !i
}

window.onload = function() {
    window.setInterval(function() {
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
};

let clockCSS = () => {
    !!i ? $("#clock").css('color', 'orange') : $("#clock").css('color', 'black')
    i = !i
}