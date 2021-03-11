import TagFactory from './TagFactory'

export default class Header
{
    static create()
    {
        const headerNav = document.createElement("nav")
        const header = document.createElement("header")
        const logoLink = document.createElement('a')
        const logoImg = document.createElement('img')
        const tags = Header.tags.map(tag =>{return tag})

        logoLink.href = "index.html"
        logoImg.src = "./logo.png"
        logoImg.alt = "Fisheye Home page"
        logoLink.setAttribute("aria-label", "ImageLink")

        for (let i = 0; i < tags.length; i++) {
            const tag = tags[i];
            const spanTags = TagFactory.create({tag})
            headerNav.appendChild(spanTags)
        }

        header.classList.add("header")

        document.body.prepend(header)
        logoLink.appendChild(logoImg)
        header.appendChild(logoLink)
        header.appendChild(headerNav)

        return header
    }
    //tags reference
    static tags =
    [
        "Portrait",
        "Art",
        "Fashion",
        "Architecture",
        "Travel",
        "Sport",
        "Animals",
        "Events",
    ]
}
