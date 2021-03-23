import TagFactory from './TagFactory'

export default class Header
{
    static create()
    {
        const headerNav = document.createElement("nav")
        const header = document.createElement("header")
        const logoLink = document.createElement('a')
        const logoImg = document.createElement('img')
        const tagsContent = [
            "Portrait",
            "Art",
            "Fashion",
            "Architecture",
            "Travel",
            "Sport",
            "Animals",
            "Events"
        ]
        const tags = tagsContent.map(tag => tag )

        logoLink.href = "index.html"
        logoImg.src = "./logo.png"
        logoImg.alt = "Fisheye Home page"
        logoLink.setAttribute("aria-label", "ImageLink")

        for (let i = 0; i < tags.length; i+=1) {
            const tag = tags[i];
            const spanTags = TagFactory.create({tag})
            headerNav.appendChild(spanTags)
        }

        header.classList.add("header")
        headerNav.classList.add("tag-navigation")
        logoImg.classList.add("logo")

        document.body.prepend(header)
        logoLink.appendChild(logoImg)
        header.appendChild(logoLink)
        header.appendChild(headerNav)

        return header
    }
}
