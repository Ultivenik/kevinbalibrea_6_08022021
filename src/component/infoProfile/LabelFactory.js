export default class LabelFactory
{
    static create(nameClass, content, id)
    {
        const Label = document.createElement("label")
        Label.classList.add(nameClass)
        Label.innerHTML = content
        Label.setAttribute("for", id)
        return Label
    }
}