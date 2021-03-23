export default class InputFactory
{
    static create(type, id)
    {
        const input = document.createElement("input")
        input.type = type
        input.classList.add("input-form")
        input.id = id
        return input
    }
}