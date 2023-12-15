const turnOffPreloader = () => {
    const preloader = document.querySelector(".pre-loader");
    preloader.style.display = "none";

    const main = document.querySelector(".main");
    main.style.display = "flex";
}

window.onload = function() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    turnOffPreloader();
};
