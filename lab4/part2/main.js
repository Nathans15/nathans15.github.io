const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilename = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = ["human eye", "seashell", "flowers", "painting", "butterfly"];

/* Looping through images */
for (let i = 0; i < imageFilename.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFilename[i]);
    newImage.setAttribute('alt', imageAltText[i]);
    thumbBar.appendChild(newImage);
}

newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
});

/* Wiring up the Darken/Lighten button */
