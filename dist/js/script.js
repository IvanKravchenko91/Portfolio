const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__progress-percent'),
    orange = document.querySelectorAll('.skills__progress-orange span');

    percents.forEach( (item, i) => {
        orange[i].style.width = item.innerHTML;
    });