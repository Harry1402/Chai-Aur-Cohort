const nextbutton = document.getElementById("nextButton");
const prevbutton = document.getElementById("prevButton");



const carouselTrack = document.getElementById("carouselTrack");
const totalslides = carouselTrack.children.length;
let index = 0;

function showslides(i) {
    index = (i + totalslides) % totalslides;
    carouselTrack.style.transform = `translateX(-${index * 100}%)`
}

function nextslide() {
    console.log("hello");


    showslides(index + 1);
}

function prevslide() {
    console.log("World");

    showslides(index - 1);
}