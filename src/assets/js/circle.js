let circle = document.querySelector('.main__block-circle img')
let i = 0

document.onwheel = function (event) {  
    if (event.deltaY != 0) {
        console.log('scroll')
        i = i++ + 5
    } 
}
setInterval(() => { 
    i++
    circle.style.transform = 'translate(-50%, -50%) rotate(' + i + 'deg)';
}, 20);
