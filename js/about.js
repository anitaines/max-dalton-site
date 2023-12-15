// Function definitions

const togglePicture = (event) => {
    if (event.currentTarget.style.backgroundImage == 'url("images/about-maxDalton.jpg")'){
        event.currentTarget.style.backgroundImage = "url('images/about-maxDalton-illustration.jpg')";
        event.currentTarget.style.backgroundPosition = "center";
    } else {
        event.currentTarget.style.backgroundImage = "url('images/about-maxDalton.jpg')";
        event.currentTarget.style.backgroundPosition = "bottom";
    }
}


// Code execution

const image = document.querySelector(".main-about .image-container");

image.style.backgroundImage = "url('images/about-maxDalton.jpg')";

if (window.screen.width >= 992){
    image.addEventListener('mouseover', togglePicture);
}
