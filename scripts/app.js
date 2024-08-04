const navToggleIcon = document.querySelector(".nav__toggle-icon")
const menu = document.querySelector(".menu")
const cover = document.querySelector(".cover")
const resumeListItems = document.querySelectorAll(".resume-list__item")
const portfolioListItems = document.querySelectorAll(".portfolio-list__item")


navToggleIcon.addEventListener("click", function() {
    console.log("ok")
    this.classList.toggle("nav__toggle-icon--open")
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
})

resumeListItems.forEach((resumeListItem) => {
    resumeListItem.addEventListener("click", function () {
        document.querySelector(".resume-list__item--active").classList.remove("resume-list__item--active")
        document.querySelector(".resume-content--active").classList.remove("resume-content--active")
        this.classList.add("resume-list__item--active")
        let contentId = this.getAttribute("data-content-id")
        document.querySelector(contentId).classList.add("resume-content--active")
    })
})



portfolioListItems.forEach((item) => {
    item.addEventListener("click", function() {
        document.querySelector(".portfolio-list__item--active").classList.remove("portfolio-list__item--active")

        document.querySelector(".portfolio-content--active").classList.remove("portfolio-content--active")   
        this.classList.add("portfolio-list__item--active")
        let portfolioId = this.getAttribute("portfolio-id")
        // console.log(portfolioId)
        document.querySelector(portfolioId).classList.add("portfolio-content--active")
    })
})