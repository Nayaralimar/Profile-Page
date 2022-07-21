let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menuMobile = menuSection.querySelector(".menu-mobile")
const menuMobileTwo = menuSection.querySelector(".menu-mobile-two")
const menuMobileThree = menuSection.querySelector(".menu-mobile-three")
const menuMobileFour = menuSection.querySelector(".menu-mobile-four")



menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

menuMobile.addEventListener("click", () => {

    document.body.style.overflow = "scroll"

    menuSection.classList.toggle("on", show)
    show = !show;
})

menuMobileTwo.addEventListener("click", () => {

    document.body.style.overflow = "scroll"

    menuSection.classList.toggle("on", show)
    show = !show;
})

menuMobileThree.addEventListener("click", () => {

    document.body.style.overflow = "scroll"

    menuSection.classList.toggle("on", show)
    show = !show;
})

menuMobileFour.addEventListener("click", () => {

    document.body.style.overflow = "scroll"

    menuSection.classList.toggle("on", show)
    show = !show;
})