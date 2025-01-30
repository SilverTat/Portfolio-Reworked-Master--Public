// Object to store slide indices and enlargement states
const slideshows = {
    slideshow1: { index: 0, isEnlarged: false, totalSlides: 12 },
    slideshow2: { index: 0, isEnlarged: false, totalSlides: 3 },
    slideshow3: { index: 0, isEnlarged: false, totalSlides: 8 },
    slideshow4: { index: 0, isEnlarged: false, totalSlides: 2 },
    slideshow5: { index: 0, isEnlarged: false, totalSlides: 2 },
    slideshow6: { index: 0, isEnlarged: false, totalSlides: 5 },
    
};

// Initialize all slideshows
Object.keys(slideshows).forEach(slideshow => showSlides(slideshow, slideshows[slideshow].index));

function nextSlide(slideshow) {
    showSlides(slideshow, slideshows[slideshow].index += 1);
}

function prevSlide(slideshow) {
    showSlides(slideshow, slideshows[slideshow].index -= 1);
}

function showSlides(slideshow, n) {
    let slides = document.querySelectorAll(`.${slideshow} .slideshowTestCase`);
    if (n >= slides.length) { slideshows[slideshow].index = 0; }
    if (n < 0) { slideshows[slideshow].index = slides.length - 1; }
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slideshows[slideshow].isEnlarged) {
            slide.classList.add('enlarged');
        } else {
            slide.classList.remove('enlarged');
        }
    });
    slides[slideshows[slideshow].index].classList.add('active');
    updateSlideNumber(slideshow); // Update the slide number
}

function enlargeImage(slideshow) {
    let activeSlide = document.querySelector(`.${slideshow} .slideshowTestCase.active`);
    if (activeSlide) {
        activeSlide.classList.toggle('enlarged');
        slideshows[slideshow].isEnlarged = !slideshows[slideshow].isEnlarged; // Toggle the state
        showSlides(slideshow, slideshows[slideshow].index); // Apply the state to all images
    }
}

function updateSlideNumber(slideshow) {
    let slideNumberElement = document.getElementById(`slideNumber${slideshow.slice(-1)}`);
    if (slideNumberElement) {
        slideNumberElement.textContent = `${slideshows[slideshow].index + 1}/${slideshows[slideshow].totalSlides}`;
    }
}