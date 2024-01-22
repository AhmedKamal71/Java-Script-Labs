var currentIndex = 0;
var totalImages = document.getElementsByClassName('slider-image').length;
var imageList = document.getElementById('image-list');
var imageWidth = document.querySelector('.slider-image').offsetWidth;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    var translateValue = -currentIndex * imageWidth;
    imageList.style.transform = 'translateX(' + translateValue + 'px)';
}