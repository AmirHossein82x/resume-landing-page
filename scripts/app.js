const navToggleIcon = document.querySelector(".nav__toggle-icon")
const menu = document.querySelector(".menu")
const cover = document.querySelector(".cover")
const resumeListItems = document.querySelectorAll(".resume-list__item")
const portfolioListItems = document.querySelectorAll(".portfolio-list__item")
const menuItems = document.querySelectorAll(".menu__item")
const sections = document.querySelectorAll("main > section")


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


const observer = new IntersectionObserver(observerHandler, {threshold: 0.5});

function observerHandler(allSections) {
    allSections.map((section) => {
        let sectionClassName = section.target.className
        if (section.isIntersecting) {
            console.log(sectionClassName)
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.add("menu__item--active")
        }else {
            
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.remove("menu__item--active")
        }
    })
    
}


sections.forEach((section) => {
    observer.observe(section)
})
menuItems.forEach((item) => {
    item.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(".menu__item--active").classList.remove("menu__item--active")
        item.classList.add("menu__item--active")
        let sectionClass = item.getAttribute("data-section")
        window.scrollTo({
            top: document.getElementById(sectionClass).offsetTop - 200,
            behavior: "smooth"
        })
        
        

    })  
})

