export default  class ArrowFactory {
    static create({
        left,
        onClick,
        right
    }) {
        const arrowElement = document.createElement('button')
        arrowElement.addEventListener("click", onClick)
        if (left) {
            arrowElement.classList.add("fas", "fa-chevron-left", "left-arrow")
        }
        if (right) {
            arrowElement.classList.add("fas", "fa-chevron-right", "right-arrow")
        }
        return arrowElement
    }
}