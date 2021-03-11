export default class VideoFactory
{
    static create({
        source,
        altText
    })
    {
        const videoGallery = document.createElement("video")
        videoGallery.addEventListener('click', () =>{
            videoGallery.setAttribute("controls", "")
        })
        videoGallery.dataset.altText = altText

        const sourceVideoGallery = document.createElement("source")
        sourceVideoGallery.src = source
        videoGallery.appendChild(sourceVideoGallery)
        return videoGallery
    }
}