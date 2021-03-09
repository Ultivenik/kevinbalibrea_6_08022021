export default class SelectFactory
{
    static create(
        nameClass
    )
    {
        const select = document.createElement("select")
        select.classList.add(nameClass)
        return select
    }
}