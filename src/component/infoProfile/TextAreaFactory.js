export default class TextAreaFactory
{
    static create(id)
    {
        const textInput = document.createElement("textarea")
        textInput.classList.add("input-form")
        textInput.id = id
        return textInput
    }
}