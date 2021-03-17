    export default class IconFactory
{
    static create()
    {
        const icon = document.createElement("i")
        icon.classList.add("fas", "fa-heart")
        icon.setAttribute("aria-label", "likes")
        return icon
    }
}