export default  class ArrowFactory {
    static create({
        left,
        onClick,
        right,
        nameClass
    }) {
        const arrowElement = document.createElement('button')
        arrowElement.classList.add("btn-lightbox", nameClass)
        arrowElement.addEventListener("click", onClick)
        if (left) {
            arrowElement.innerHTML = "<i class= 'fas fa-chevron-left left-arrow'></i>"
        }
        if (right) {
            arrowElement.innerHTML = "<i class= 'fas fa-chevron-right right-arrow'></i>"
        }
        return arrowElement
    }
}