const prevButtonEl = document.getElementById('prev')

const imageContainerEl = document.querySelector('.image-container');

const nextButtonEl = document.getElementById('next')

let x =0;
let timer;
prevButtonEl.addEventListener('click', ()=>{
    x = x+ 45;
    clearTimeout(timer);
    updateGallary();
})

nextButtonEl.addEventListener('click', ()=>{
    x =x -45;
    clearTimeout(timer);
    updateGallary();
})

function updateGallary(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x-45;
        updateGallary();
    }, 3000);
}
updateGallary()