export default class VideoFactory
{
    static create({
        source,
        text
    })
    {
        const videoGallery = document.createElement("video")
        videoGallery.setAttribute("aria-label", `${text}`)
        videoGallery.controls = true
        videoGallery.dataset.altText = text

        const sourceVideoGallery = document.createElement("source")
        sourceVideoGallery.src = source
        videoGallery.appendChild(sourceVideoGallery)
        return videoGallery
    }
}