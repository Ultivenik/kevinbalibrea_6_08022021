export default class ImageFactory
{
    static create({
        source,
        text,
        className = "media-gallery",
    }) {

        const image = document.createElement("img")
        image.classList.add(className)
        image.setAttribute("aria-label", `${text}`)
        image.src = source
        image.alt = text
        image.dataset.altText = text
        return image
    }
}