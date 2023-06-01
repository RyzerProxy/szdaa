const popupButton = document.getElementById('popup-button');
const popupOverlay = document.getElementById('popup-overlay');
const closeButton = document.querySelector('.close-button');

popupButton.addEventListener('click', () => {
  popupOverlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});
