export default class InputFactory
{
    static create(type, id)
    {
        const input = document.createElement("input")
        input.type = type
        input.classList.add("input-form")
        input.id = id
        input.tabIndex = 0
        return input
    }
}