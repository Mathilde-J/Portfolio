const ratio = 0.2;
let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('appear')
        //     // observer.unobserve(entry.target)
        // } 
        // // else {
        // //     entry.target.classList.remove('appear')
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.invisible').forEach(function (r) {
    observer.observe(r);
})
