export default  class ArrowFactory {
    static create({
        left,
        onClick,
        right
    }) {
        const arrowElement = document.createElement('button')
        arrowElement.addEventListener("click", onClick)
        if (left) {
            arrowElement.innerHTML = "<i class= 'fas fa-chevron-right right-arrow'></i>"
        }
        if (right) {
            arrowElement.innerHTML = "<i class= 'fas fa-chevron-left left-arrow'></i>"
        }
        return arrowElement
    }
}