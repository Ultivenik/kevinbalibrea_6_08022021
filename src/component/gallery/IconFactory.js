    export default class IconFactory
{
    static create(nameClass, ariaType, value)
    {
        const icon = document.createElement("i")
        icon.classList.add("fas", `${nameClass}`)
        icon.setAttribute(`aria-${ariaType}`, `${value}`)
        return icon
    }
}