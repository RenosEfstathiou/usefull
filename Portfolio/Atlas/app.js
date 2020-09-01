// navbar start
const navSlide  = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');  

    });

}

navSlide();

// navbar end

// parallax #home
const parallax = document.getElementById("home");

window.addEventListener("scroll", function(){
    let offset = this.window.pageYOffset;
    parallax.style.backgroundPositionY =  offset * 0.5 + "px";
});

// parallax end

// observer 


const sections = document.querySelectorAll('section');
const faders=  document.querySelectorAll('.fade-in');
const sliders=  document.querySelectorAll('.slide-in');

const options = {
    root: null,
    threshold: 0 ,
    rootMargin: "25px"

};
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        console.log(entry);
        // entry.target.classList.toggle("classname"); gia na valw mia klash otan kanei intrsect
        
        // observer.unobserve(entry.target); gia na stamathsei o observer gia ena sigekrimeno 
        //  section se afth thn eriptwsh
    });
},options);

sections.forEach(section =>{observer.observe(section)});
const appearOptions ={
    threshold: 0.2,
};
const appearOnScroll = new IntersectionObserver(
    function(entries,appearOnScroll){ 
        entries.forEach(entry=> {
            if(!entry.isIntersecting){
                return;
            }
            entry.target.classList.add('appear');
            console.log(entry.target);
            appearOnScroll.unobserve(entry.target);

        });
},appearOptions

);

faders.forEach(fader=> {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
// observer end
