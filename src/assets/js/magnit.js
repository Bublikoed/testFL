const screen = document.querySelector('.main-screen');
const txtWrap = document.querySelector('.main__block');
const txt = document.querySelector('.main__block-title');

const yellowCircle = document.querySelector('.main__block-yellow');


txtWrap.addEventListener('mousemove', function(e) {
    const x = e.pageX / window.screen.width
    const y = e.pageY / window.screen.height
    // yellowCircle.style.transform = `translate(${x * 30}px, ${y * 30}px)`
    txt.style.transform = `translate(${x * 30}px, ${y * 30}px)`

})