let clickCount = 0;
let timer;

const blackBg = (selector) => {
  document.querySelectorAll(selector).forEach(element => {
    element.style.backgroundColor = 'black';
  });
  
  alert(`Background changed to black !`);
};

const resetClickCount = () => {
  clickCount = 0;
};

document.querySelector('footer').addEventListener('click', () => {
  clickCount++;
  
  if (clickCount === 1) {
    timer = setTimeout(resetClickCount, 1000);
  } else if (clickCount === 2) {
    clearTimeout(timer);
    blackBg('body, header, .navigation, footer, .grid-container, .grid-top, .top-content, .bottom-content, .button');
    resetClickCount();
  }
});
