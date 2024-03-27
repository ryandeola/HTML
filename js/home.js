var banners = ["./img/champions.png", "./img/neymar.png"];
var bannerAtual = 0;
var timer = setInterval(trocaBanner, 2000);

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.classList.contains('pause')) {
        clearInterval(timer);
        controle.classList.remove('pause');
        controle.classList.add('play');
    } else {
        timer = setInterval(trocaBanner, 2000);
        controle.classList.remove('play');
        controle.classList.add('pause');
    }
    return false;
};
