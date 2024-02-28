const languageBox = document.querySelector('.language-box');
const languageList = document.querySelector('.language-list');

languageBox.addEventListener('click', () => {
  languageList.classList.toggle('active'); // Toggle active class for the list
});