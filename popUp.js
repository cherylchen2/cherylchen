const readMore = document.getElementById("VSButton");
const closePop = document.getElementById("closePopVs");
const popWindow = document.getElementById("VSPopContainer");

readMore.addEventListener('click', () => {
    popWindow.classList.add('show');
    
});

closePop.addEventListener('click', () => {
    popWindow.classList.remove('show');
});