// Function definitions

const setBackgroundColor = (number) => {
  let color = "#ffffff";

  switch (number) {
    case 0:
      color = "#6fa594";
        break;

    case 1:
      color = "#f1565e";
        break;

    case 2:
      color = "#d2b746";
        break;

    case 3:
      color = "#56af80";
        break;

    case 4:
      color = "#dda64b";
        break;
  }

  localStorage.setItem('backgroundColor', color);
}

const applyBackgroundColor = () => {
  // main
  const mainHome = document.querySelector(".main-home");
  mainHome.style.backgroundColor = localStorage.getItem('backgroundColor');

  // mobile menu
  const mobileMenu = document.querySelector("nav.mobile .menu-items");
  mobileMenu.style.backgroundColor = localStorage.getItem('backgroundColor');

  // body
  const body = document.querySelector("body");
  body.style.backgroundColor = localStorage.getItem('backgroundColor');
}

const insertHomeImage = (id) => {
  const imageContainer = document.querySelector(".image-container a");

  const image = `
    <picture>
      <!-- desktop: -->
      <source
        srcset="images/media-home/${id}_desktop.webp"
        media="(min-width: 992px)"
        type="image/webp"
      />
      <source
        srcset="images/media-home/${id}_desktop.png"
        media="(min-width: 992px)"
        type="image/png"
      />
      <!-- tablet: -->
      <source
        srcset="images/media-home/${id}_tablet.webp"
        media="(min-width: 768px)"
        type="image/webp"
      />
      <source
        srcset="images/media-home/${id}_tablet.png"
        media="(min-width: 768px)"
        type="image/png"
      />
      <!-- mobile: -->
      <source
        srcset="images/media-home/${id}_mobile.webp"
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcset="images/media-home/${id}_mobile.png"
        media="(max-width: 767px)"
        type="image/png"
      />
      <!--  -->
      <img
        src="images/media-home/${id}_desktop.png"
        alt="Work sample. Illustration."
      />
    </picture>
  `;

  imageContainer.insertAdjacentHTML('afterbegin', image);
}

const turnOffPreloader = () => {
  const preloader = document.querySelector(".pre-loader");
  preloader.style.display = "none";

  const mainHome = document.querySelector(".main-home");
  mainHome.style.display = "flex";
}

const openMobileMenu = (event) => {
  const navMobileHome = document.querySelector(".mobile.home");
  navMobileHome.style.backgroundColor = localStorage.getItem('backgroundColor');

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

  const navMobileHome = document.querySelector(".mobile.home");
  navMobileHome.style.backgroundColor = 'transparent';
}

const setMenuTransition = (value) => {
  localStorage.setItem('home', value);
}


// Code execution

const randomNumber = Math.floor(Math.random() * 5);

setBackgroundColor(randomNumber);

applyBackgroundColor();

insertHomeImage(randomNumber);

window.onload = function() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  turnOffPreloader();
};

const openButton = document.querySelector("button.open");
openButton.addEventListener('click', openMobileMenu);

const closeButton = document.querySelector("button.close");
closeButton.addEventListener('click', closeMobileMenu);

setMenuTransition('true');
