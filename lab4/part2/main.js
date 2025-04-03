const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilename = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = [{altText1 : "eye"},
                      {altText2 : "seashell"},
                      {altText3 : "flowers"},
                      {altText4 : "painting"},
                      {altText5 : "butterfly"}];

/* Looping through images */
for (let i = 0; i < imageFilename.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFilename[i]);
    newImage.setAttribute('alt', imageAltText[i]);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
