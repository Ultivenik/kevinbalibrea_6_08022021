export default class CloseFactory
{
    static create({
        onClick,
        nameClass
    })
    {
        const close = document.createElement("button")
        close.classList.add("btn-lightbox", nameClass)
        close.innerHTML = "<i class='fas fa-times'></i>"
        close.addEventListener('click', onClick)
        return close
    }
}