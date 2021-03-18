export default class Form
{
    static create()
    {
        const form = document.createElement("form")
        form.classList.add("contact-form")
        form.tabIndex = 0
        return form
    }
}