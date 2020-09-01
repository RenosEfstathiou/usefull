// intersection observer
const sect1 = document.querySelector('.section1');
const sects = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.25,
    margin: "-125px"

};

const observer  =  new IntersectionObserver(function(entries , observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        entry.target.classList.toggle("change");
        observer.unobserve(entry.target);
    });
},  options);

sects.forEach(section => {
    observer.observe(section);
});
observer.observe(sect1);