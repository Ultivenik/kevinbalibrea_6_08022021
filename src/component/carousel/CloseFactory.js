export default class CloseFactory
{
    static create({
        onClick,
        nameClass
    })
    {
        const close = document.createElement("button")
        close.classList.add("btn-lightbox", nameClass)
        close.setAttribute("aria-label", "Close dialog")
        close.setAttribute("role", "Button")
        close.innerHTML = "<i class='fas fa-times'></i>"
        close.addEventListener('click', onClick)
        close.addEventListener("keydown", onClick)
        return close
    }
}