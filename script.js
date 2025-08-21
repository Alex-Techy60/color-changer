const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');

boxes.forEach(function(box){
    box.addEventListener('click', function(e){
        const boxColor = window.getComputedStyle(e.target).backgroundColor;
        body.style.backgroundColor = boxColor;
    });
});