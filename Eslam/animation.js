
    document.addEventListener("DOMContentLoaded",function(){
        let audio = document.getElementById('background-audio');
        
       document.onclick=function(){
         audio.pause();
       }

       document.ondblclick=function(){
         audio.play();
       }
    })

        document.addEventListener('DOMContentLoaded', function() {
    const elements = [
        { selector: '#myExperienceImg', animationClass: 'animate-slideRight' },
        { selector: '#myExperienceText', animationClass: 'animate-slideLeft' },
        { selector: '#myExperience', animationClass: 'animate-scaleUp' },
        { selector: '#myEducationImg', animationClass: 'animate-slideTop' },
        { selector: '#myEducationText', animationClass: 'animate-slideBottom' },
        { selector: '#myEducation', animationClass: 'animate-scaleDown' },
        { selector: '#serviceCard1', animationClass: 'animate-slideBottom' },
        { selector: '#serviceCard2', animationClass: 'animate-slideLeft' },
        { selector: '#serviceCard3', animationClass: 'animate-slideRight' },
        { selector: '#serviceCard4', animationClass: 'animate-slideTop' },
        { selector: '#contactUs', animationClass: 'animate-slideRight' },
        { selector: '#footer', animationClass: 'animate-slideLeft' },
        { selector: '#two', animationClass: 'sectionTwoAnimation' },
        { selector: '#about', animationClass: 'animate-slideRight' },
        { selector: '#portfolio', animationClass: 'animate-slideLeft' },
        { selector: '#offers', animationClass: 'animate-scaleUp' },
        { selector: '#awards', animationClass: 'animate-scaleDown' },
        { selector: '#funFacts', animationClass: 'animate-scaleUp' },
    ];

    function applyAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animationClass);
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(applyAnimation, { threshold: 0.1 });

    elements.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.dataset.animationClass = item.animationClass;
            observer.observe(element);
        }
    });
});