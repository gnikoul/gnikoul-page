const introHead = document.getElementById('intro-head');
const introBody = document.getElementById('intro-body');
const introImg = document.getElementById('intro-img');

sleep(300, () => {introImg.classList.add('active')});
sleep(800, () => {introHead.classList.add('active')});
sleep(1300, () => {introBody.classList.add('active')});
