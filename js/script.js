const $btnHamburguer = document.querySelector('#btnHamburger');
const $header = document.querySelector('.header');
const $overlay = document.querySelector('.overlay')
const $fadeElems = document.querySelectorAll('.has-fade')
const $body = document.querySelector('body')

$btnHamburguer.addEventListener('click', () => {
    console.log('open hamburger');

    if ($header.classList.contains('open')) { //Close Hamburger
        $header.classList.remove('open');
        $body.classList.remove('noscroll')
        $overlay.classList.remove('fade-in');
        $overlay.classList.add('fade-out');
        $fadeElems.forEach((element) => {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })

    } else { //Open Hamburger Menu
        $body.classList.add('noscroll')
        $header.classList.add('open');
        $overlay.classList.add('fade-in');
        $overlay.classList.remove('fade-out');
        $fadeElems.forEach((element) => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }

});

