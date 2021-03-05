import info from './../../../FishEyeDataFR.json'

export default class TagFactory
{
    static create({
        headerNav,
        onClick,
        tag
    })
    {
        const spanNav = document.createElement("span")
        const linkNav = document.createElement("a")
        spanNav.classList.add("tag")
        spanNav.setAttribute("role", "Links")

        linkNav.href = "#"
        linkNav.setAttribute("aria-label", "Tag")

        headerNav.appendChild(spanNav)
        spanNav.appendChild(linkNav)

        linkNav.innerHTML = "#" + tag
        linkNav.addEventListener('click', onClick)
    }
}