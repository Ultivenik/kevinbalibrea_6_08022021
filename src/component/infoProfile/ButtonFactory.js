export default class ButtonFactory
{
    static create(nameClass, content)
    {
        const btnContact = document.createElement("button")
        btnContact.classList.add(nameClass)
        btnContact.innerHTML = content
        btnContact.tabIndex = 0
        return btnContact
    }
}