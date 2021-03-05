import info from './../../../FishEyeDataFR.json'
import TagFactory from './TagFactory'

export default class HeaderFactory
{
    static create()
    {
        return HeaderFactory.createHeader()
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

    // create header method
    static createHeader()
    {
        const headerNav = document.createElement("nav")
        const header = document.createElement("header")
        const logoLink = document.createElement('a')
        const logoImg = document.createElement('img')

        logoLink.href = "index.html"
        logoImg.src = "./logo.png"
        logoImg.alt = "Fisheye Home page"
        logoLink.setAttribute("aria-label", "ImageLink")

        header.classList.add("header")

        document.body.prepend(header)
        logoLink.appendChild(logoImg)
        header.appendChild(logoLink)
        header.appendChild(headerNav)

        HeaderFactory.createTags(headerNav)

        return header
    }

    //creating tags method
    static createTags(parent)
    {
        const tags = HeaderFactory.tags.map(tag =>{return tag})

        for (let i = 0; i < tags.length; i++) {
            const tag = tags[i];
            TagFactory.create({parent, tag})
        }
    }

}
