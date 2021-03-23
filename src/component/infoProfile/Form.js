export default class Form
{
    static create(nameClass)
    {
        const form = document.createElement("form")
        form.classList.add(nameClass)
        return form
    }
}