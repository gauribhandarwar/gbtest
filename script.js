let currentSlide = 0;
showSlide(currentSlide);

function move(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { currentSlide = 0 }
    if (n < 0) { currentSlide = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
    resizeIframes(); // Call the resize function after displaying a slide
}

function resizeIframes() {
    const iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
        const iframe = iframes[i];
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
    }
}
