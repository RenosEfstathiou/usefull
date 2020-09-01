var section1 = document.querySelector('#home');
var sections =  document.querySelectorAll('section')
var options = {
    root: null, // it is the viewport
    threshold: .25,
    rootMargin: "-125px"
};
var observer= new IntersectionObserver(function(entries , observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry.target);
        entry.target.classList.toggle("test-smthng");
        observer.unobserve(entry.target);
    });
} , options);

sections.forEach(section => {
    observer.observe(section);
});
