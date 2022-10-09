const menu__icon = document.querySelector('.menu__icon')
const menu__square = document.querySelector('.menu__square')
const active = document.querySelector('.active')

const showMenu = () => {
    menu__square.classList.toggle('active')
}



menu__icon.addEventListener('click', showMenu)


var i=0, text;

text="Witamy w najlepszej kawiarni w Warszawie"


function literingText () {
    if (i<text.length) {
        document.querySelector('.header__text').innerHTML += text.charAt(i);
        i++
        setTimeout(literingText, 100)
    }
}

literingText()