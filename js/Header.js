import "core-js/stable";
import "regenerator-runtime/runtime";

let classImg = {
    img1: "img-1",
    img2: "img-2",
    img3: "img-3",
    img4: "img-4",
    img5: "img-5",
    img6: "img-6",
}
let classText = {
    city: "city",
    quote: "quote",
    price: "price"
}

const Header = () => {
    let tags = [
        "#Portrait",
        "#Art",
        "#Fashion",
        "#Architecture",
        "#Travels",
        "#Sports",
        "#Animals",
        "#Events",
    ]

    let header = document.createElement("header")
    let logoLink = document.createElement('a')
    let logoImg = document.createElement('img')
    let headerNav = document.createElement("nav")

    document.body.prepend(header)
    header.appendChild(logoLink)
    logoLink.appendChild(logoImg)
    header.appendChild(headerNav)

    header.classList.add("header")
    logoLink.href = "index.html"
    logoImg.src = "/src/logo.png"

    tags.map(tag =>{
        let spanNav = document.createElement("span")
        let linkNav = document.createElement("a")

        linkNav.href = "#"
        spanNav.classList.add("tag")

        headerNav.appendChild(spanNav)
        spanNav.appendChild(linkNav)

        linkNav.innerHTML = tag
    })
}

export default Header