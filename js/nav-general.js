// Function definitions

const applyBackgroundColorToNav = (color) => {
    const mobileNav = document.querySelector("nav.mobile.general");
    mobileNav.style.backgroundColor = color;

    const mobileMenu = document.querySelector("nav.mobile .menu-items");
    mobileMenu.style.backgroundColor = color;
}

const openMobileMenu = (event) => {
    event.currentTarget.style.display = 'none';

    const mobileMenu = document.querySelector("nav.mobile .menu-items");
    mobileMenu.style.left = '0';

    const closeButton = document.querySelector("button.close");
    closeButton.style.display = 'inline';
}

const closeMobileMenu = (event) => {
    event.currentTarget.style.display = 'none';

    const mobileMenu = document.querySelector("nav.mobile .menu-items");
    mobileMenu.style.left = '-100vw';

    const openButton = document.querySelector("button.open");
    openButton.style.display = 'inline';
}

const setMenuTransition = (value) => {
    localStorage.setItem('home', value);
}

const applyMenuTransition = (color) => {
    const desktopNav = document.querySelector("nav.desktop.general");
    const viewportWidth = window.innerWidth;

    if (localStorage.getItem('home') == 'true'){

        setTimeout(function(){
            desktopNav.style.backgroundColor = color;

            if (viewportWidth < 2060){
                desktopNav.style.left = "0%";
            } else {
                desktopNav.style.left = "calc((100vw - 2048px) / 2)";
            }

            setMenuTransition('false');

            setTimeout(function(){
                const body = document.querySelector("body");
                body.style.backgroundColor = color;
            }, 250);

        }, 100);

    } else {

        desktopNav.style.transitionProperty = "none";
        desktopNav.style.backgroundColor = color;

        if (viewportWidth < 2060){
            desktopNav.style.left = "0%";
        } else {
            desktopNav.style.left = "calc((100vw - 2048px) / 2)";
        }

        const body = document.querySelector("body");
        body.style.transitionProperty = "none";
        body.style.backgroundColor = color;

    }
}


// Code execution

let color = localStorage.getItem('backgroundColor');
if (color == null){
    color = '#6fa594';
}

applyBackgroundColorToNav(color);

const openButton = document.querySelector("button.open");
openButton.addEventListener('click', openMobileMenu);

const closeButton = document.querySelector("button.close");
closeButton.addEventListener('click', closeMobileMenu);

applyMenuTransition(color);
