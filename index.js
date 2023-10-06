let btn = document.getElementById("mode")
let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let td = document.querySelectorAll("td")
let th = document.querySelectorAll("th")
let footer = document.querySelector("footer")
let p = document.querySelector("footer>p")
btn.addEventListener("click", () => {
    if (btn.className.includes("light-mode")) {
        btn.classList.remove("light-mode")
        btn.classList.add("dark-mode")
        btn.innerText = "Light Mode"
        body.style.backgroundColor = "black"
        h1.style.color = "white"
        for(let i = 0;i < td.length;i++) {
            td[i].style.color = "white"
        }
        for(let i = 0;i < th.length;i++) {
            th[i].style.color = "white"
        }
        // footer
        footer.style.backgroundColor = "white"
        p.style.color = "black"
    }
    else {
        btn.classList.remove("dark-mode")
        btn.classList.add("light-mode")
        btn.innerText = "dark Mode"

        h1.style.color = "black"

        body.style.backgroundColor = "white"
        for(let i = 0;i < td.length;i++) {
            td[i].style.color = "black"
        }
        for(let i = 0;i < th.length;i++) {
            th[i].style.color = "black"
        }

        // footer
        footer.style.backgroundColor = "black"
        p.style.color = "white"
    }
}) 