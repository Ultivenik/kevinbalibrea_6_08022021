export default class SortOptionFactory
{
    static create(
        optContent,
        nameClass
    )
    {
        const option = document.createElement("option")
        option.classList.add(nameClass)
        option.value = optContent
        option.text = optContent
        return option
    }
}