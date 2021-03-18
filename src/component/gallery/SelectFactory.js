export default class SelectFactory
{
    static create(
        nameClass,
        id
    )
    {
        const select = document.createElement("select")
        select.classList.add(nameClass)
        select.id = id
        return select
    }
}