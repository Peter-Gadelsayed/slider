const closeIcon = document.getElementById("closeIcon");
const nextIcon = document.getElementById("nextIcon");
const prevIcon = document.getElementById("prevIcon");
const sliderContainer = document.getElementById("sliderContainer");

let imgList = document.querySelectorAll('.img-container img');

let currentIndex = 0;



closeIcon.addEventListener("click", closeSlider);
nextIcon.addEventListener("click", nextSlide);
prevIcon.addEventListener("click", prevSlide);

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", () => {
        showSlider(i)
        sliderContainer.style.display = "flex";
    });
}

sliderContainer.addEventListener("click", (e) => {
    if (e.target.id == "sliderContainer") {
        closeSlider();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        nextSlide();
    } else if (e.keyCode == 37) {
        prevSlide();
    } else if (e.keyCode == 27) {
        closeSlider();
    }
});



function closeSlider() {
    sliderContainer.style.display = "none";
}


function showSlider(index) {
    const sliderImg = document.getElementById('sliderImg');
    sliderImg.style.backgroundImage = `url(${imgList[index].src})`;
    currentIndex = index;
};



function nextSlide() {
    currentIndex = currentIndex + 1;
    if (currentIndex === imgList.length) {
        currentIndex = 0;
    }
    showSlider(currentIndex);
};


function prevSlide() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1
    }
    showSlider(currentIndex);
}
