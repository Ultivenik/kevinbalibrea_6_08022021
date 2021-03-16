export default class VideoFactory
{
    static create({
        source,
        text
    })
    {
        const videoGallery = document.createElement("video")
        videoGallery.setAttribute("aria-label", `${text}`)
        videoGallery.dataset.altText = text
        videoGallery.addEventListener("keydown", (e) =>{
            if(e.key === " "){
                videoGallery.play()
            }else{
                videoGallery.pause()
            }
        })
        const sourceVideoGallery = document.createElement("source")
        sourceVideoGallery.src = source
        videoGallery.appendChild(sourceVideoGallery)
        return videoGallery
    }
}