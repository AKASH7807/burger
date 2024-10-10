/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

//menu show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

// nav hidden 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("shadow-header")
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




//animation 

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

//footer 
ScrollReveal().reveal(".footer__link", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".footer__logo", {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.footer__copy', { scale: 0.85 });
ScrollReveal().reveal('.footer__social', { scale: 0.85 });


//contact 
ScrollReveal().reveal(".section__title", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".contact__data", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".contact__image", {
    ...scrollRevealOption,
    origin: "right",
})


//delivery 
ScrollReveal().reveal(".delivery__description", {
    ...scrollRevealOption,
    origin: "left",
})


ScrollReveal().reveal(".delivery__btn", {
    ...scrollRevealOption,
    origin: "bottom",
})

ScrollReveal().reveal(".delivery__img", {
    ...scrollRevealOption,
    origin: "bottom",
})


//popular burger
ScrollReveal().reveal(".popular__card", {
    ...scrollRevealOption,
    origin: "right",
})


ScrollReveal().reveal(".popular__price", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
})


//layer food
ScrollReveal().reveal(".recipe__card", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".recipe__img", {
    ...scrollRevealOption,
    origin: "left",
})

//home 
ScrollReveal().reveal(".home__burger", {
    ...scrollRevealOption,
    origin: "left",
})


ScrollReveal().reveal(".home__dish", {
    ...scrollRevealOption,
    origin: "left",
})

//recipe parts
ScrollReveal().reveal(".home__potato-1", {
    ...scrollRevealOption,
    origin: "bottom",
})
ScrollReveal().reveal(".home__potato-2", {
    ...scrollRevealOption,
    origin: "left",
})
ScrollReveal().reveal(".home__tomato-1", {
    ...scrollRevealOption,
    origin: "top",
})
ScrollReveal().reveal(".home__tomato-2", {
    ...scrollRevealOption,
    origin: "bottom",
})
ScrollReveal().reveal(".home__lettuce-1", {
    ...scrollRevealOption,
    origin: "right",
})
ScrollReveal().reveal(".home__lettuce-2", {
    ...scrollRevealOption,
    origin: "bottom",
})

//title
ScrollReveal().reveal(".home__title", {
    ...scrollRevealOption,
    origin: "bottom",
})
ScrollReveal().reveal(".home__description", {
    ...scrollRevealOption,
    origin: "left",
})
ScrollReveal().reveal(".home__btn", {
    ...scrollRevealOption,
    origin: "right",
})
ScrollReveal().reveal(".home__stricker", {
    ...scrollRevealOption,
    origin: "right",
})




