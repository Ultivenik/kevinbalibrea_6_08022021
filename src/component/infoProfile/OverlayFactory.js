export default class OverlayFactory
{
    static create()
    {
        const overlay = document.createElement("section")
        overlay.classList.add("overlay-contact")
        document.querySelector(".main").appendChild(overlay)
        return overlay
    }
}