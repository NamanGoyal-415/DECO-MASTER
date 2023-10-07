const preloader = document.getElementById("preloader");

setTimeout(() => {
    preloader.classList.add("d-none")
    preloader.classList.add("overflow-hidden")
}, 1000)

let icon = document.querySelector(".icon");
let page = document.querySelector(".mobile-view");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector(".right-0")) {
        page.classList.toggle("right-0");
    }
})

let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none"
    }
})

