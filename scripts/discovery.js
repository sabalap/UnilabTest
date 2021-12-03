const navSlide = () => {
    const burger = document.querySelector(".burger");
    const mobileNav = document.querySelector(".mobile-nav-content")
    const discoveryinfo = document.querySelector(".discovery-info-section")
    const mobileFooter = document.querySelector(".footer-mobile-footer");
    const form = document.querySelector("form");
    burger.addEventListener("click",() => {
        mobileFooter.style.display = "none";
        mobileNav.classList.toggle("mobile-nav-content-active")
        discoveryinfo.style.display = "none";
        form.style.display = "none";
    })
}
navSlide();
const closeSlide = () => {
    const close = document.querySelector(".close");
    const mobileNav = document.querySelector(".mobile-nav-content")
    const mobileFooter = document.querySelector(".footer-mobile-footer");
    const form = document.querySelector("form");
    const discoveryinfo = document.querySelector(".discovery-info-section")
    close.addEventListener("click",() => {
        mobileFooter.style.display = "flex";
        mobileNav.classList.toggle("mobile-nav-content-active");
        discoveryinfo.style.display = "block";
        form.style.display = "block";
    })
}
closeSlide();