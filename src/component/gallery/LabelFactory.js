export default class LabelFactory
{
    static create(
        nameClass,
        innerHTML,
    )
    {
        const label = document.createElement("label")
        label.classList.add(nameClass)
        label.innerHTML = innerHTML
        return label
    }
}