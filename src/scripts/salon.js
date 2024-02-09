// console.log("dossier lie");



// // / Récupérer l'élément input et l'élément span

// const slider = document.getElementById('playerSlider');
// const sliderValue = document.getElementById('sliderValue');
// const ageSlider = document.getElementById('ageSlider');
// const ageSliderValue = document.getElementById('ageSliderValue');


// slider.addEventListener('input', function() {
  
//   sliderValue.textContent = slider.value;

 
//   const thumbSize = 16; 
//   const thumbPosition = ((slider.value - slider.min) / (slider.max - slider.min)) * slider.offsetWidth;
//   sliderValue.style.left = `calc(${thumbPosition}px - ${thumbSize / 2}px)`;
// });
// ageSlider.addEventListener('input', function() {
    
//     ageSliderValue.textContent = ageSlider.value;
  
    
//     const thumbSize = 16; 
//     const thumbPosition = ((ageSlider.value - ageSlider.min) / (ageSlider.max - ageSlider.min)) * ageSlider.offsetWidth;
//     ageSliderValue.style.left = `calc(${thumbPosition}px - ${thumbSize / 2}px)`;
//   });
//  console.log("le document est lié ");
// JavaScript code to update the slider values in real-time
const playerSlider = document.getElementById('playerSlider');
const sliderValue = document.getElementById('sliderValue');
sliderValue.textContent = playerSlider.value;

playerSlider.oninput = function() {
  sliderValue.textContent = this.value;
};

const ageSlider = document.getElementById('ageSlider');
const ageSliderValue = document.getElementById('ageSliderValue');
ageSliderValue.textContent = ageSlider.value;

ageSlider.oninput = function() {
  ageSliderValue.textContent = this.value;
};