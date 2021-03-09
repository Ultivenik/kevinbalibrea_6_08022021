export default class SortOptionFactory
{
    static create(
        optContent,
    )
    {
            const option = document.createElement("option")
            option.classList.add("occurency-list")
            option.value = optContent
            option.text = optContent
            return option
    }
}