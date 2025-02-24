const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
//Button click active class
for(let i=0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
    })
}

//Section Active
allSections[0].addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if (id){
        //remove selected from the other btns
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide other sections
        section.forEach((section)=>{
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active')
    }
});

//Toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle('light-mode')
})
}

PageTransitions();

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.portfolio-carousel-slide');
    const totalImages = slides.children.length;

    currentIndex += step;

    if (currentIndex >= totalImages) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalImages - 1;

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
