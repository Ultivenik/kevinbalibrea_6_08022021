export default class CloseFactory
{
    static create({
        onClick
    })
    {
        let close = document.createElement("button")
        close.innerHTML = "<i class='fas fa-times lightbox-close-btn'></i>"
        close.addEventListener('click', onClick)
        return close
    }
}