export default class TitleFactory
{
    static create(title, content, nameClass)
    {
        const mainTitle = document.createElement(title)
        mainTitle.classList.add(nameClass)
        mainTitle.innerHTML = content
        return mainTitle
    }
}