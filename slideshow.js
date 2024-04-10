document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.getElementById("slideshow");
    const imageContainers = slideshow.querySelectorAll(".image-container");
    const buttonContainers = slideshow.querySelectorAll(".button-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const playPauseBtn = document.getElementById("play-pause-btn");
    let currentImageIndex = 0;
    let isSlideshowPaused = false;
    let slideshowInterval;

    function showImage(index) {
        imageContainers[index].querySelector("img").classList.remove("hidden");
        imageContainers[index].querySelector(".special-text").classList.remove("hidden");
        buttonContainers[index].classList.remove("hidden");

        // Hide other images and buttons
        for (let i = 0; i < imageContainers.length; i++) {
            if (i !== index) {
                imageContainers[i].querySelector("img").classList.add("hidden");
                imageContainers[i].querySelector(".special-text").classList.add("hidden");
                buttonContainers[i].classList.add("hidden");
            }
        }

        currentImageIndex = index;
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= imageContainers.length) {
            currentImageIndex = 0;
        }
        showImage(currentImageIndex);
    }

    function toggleSlideshow() {
        isSlideshowPaused = !isSlideshowPaused;
        if (isSlideshowPaused) {
            playPauseBtn.textContent = "Play";
            clearInterval(slideshowInterval);
        } else {
            playPauseBtn.textContent = "Pause";
            slideshowInterval = setInterval(nextImage, 5000);
        }
    }

    playPauseBtn.addEventListener("click", toggleSlideshow);

    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = imageContainers.length - 1;
        }
        showImage(currentImageIndex);
    }

    slideshowInterval = setInterval(nextImage, 5000);

    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    showImage(currentImageIndex);
});