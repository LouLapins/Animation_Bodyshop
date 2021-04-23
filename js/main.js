window.onload = function() {

    slideCarousel();

}

function slideCarousel() {

    const carouselImages = document.querySelectorAll('#img-carousel img');

    //Buttons
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    //Counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;

    nextBtn.addEventListener("click", () => {
        console.log(counter);
        if (counter >= (carouselImages.length)) {
            counter = 0;
        }

        gsap.to(".product-img", { duration: 3, x: (-size * counter), ease: "elastic" });
        counter++;
    });

    prevBtn.addEventListener("click", () => {
        console.log(counter);
        if (counter <= 0) {
            counter = (carouselImages.length - 1);
        }

        gsap.to(".product-img", { duration: 3, x: (-size * counter), ease: "elastic" });
        counter--;
    });

}