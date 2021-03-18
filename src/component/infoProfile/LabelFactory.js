export default class LabelFactory
{
    static create(nameClass, content, id)
    {
        const Label = document.createElement("label")
        Label.classList.add(nameClass)
        Label.innerHTML = content
        Label.setAttribute("for", id)
        Label.tabIndex = 0
        return Label
    }
}