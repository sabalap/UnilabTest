const navSlide = () => {
    const burger = document.querySelector(".burger");
    const mobileNav = document.querySelector(".mobile-nav-content")
    const moreNews = document.querySelector(".more-news");
    const mainInfoSection = document.querySelector(".main-info");
    burger.addEventListener("click",() => {
        moreNews.style.display = "none";
        mainInfoSection.style.display = "none";
        mobileNav.classList.toggle("mobile-nav-content-active")
    })
}
navSlide();
const closeSlide = () => {
    const close = document.querySelector(".close");
    const mobileNav = document.querySelector(".mobile-nav-content")
    const moreNews = document.querySelector(".more-news");
    const mainInfoSection = document.querySelector(".main-info");
    close.addEventListener("click",() => {
        moreNews.style.display = "flex";
        mainInfoSection.style.display = "block";
        mobileNav.classList.toggle("mobile-nav-content-active");
    })
}
closeSlide();