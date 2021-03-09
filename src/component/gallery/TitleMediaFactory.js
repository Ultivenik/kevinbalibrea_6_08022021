export default class TitleMediaFactory
{
    static create(text)
    {
        const title = document.createElement("h3")
        title.classList.add("title-photo-gallery")
        title.innerHTML = text
        return title
    }
}