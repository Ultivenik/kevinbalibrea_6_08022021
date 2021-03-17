import ArrowFactory from './ArrowFactory'
import CloseFactory from './CloseFactory'

const mediaPath = "/dist/SamplePhotos"

export default class LightboxFactory {
    static create({
        medias,
        currentIndex = 0,
    }) {
        const carouselContainer = document.createElement("div")
        const containerLightBox = document.createElement("div")
        let index = currentIndex;
        let currentMedia = medias[index]
        const imageContainer = document.createElement("img")
        const videoContainer = document.createElement("video")
        const sourceVideo = document.createElement("source")
        const titleImage = document.createElement("h3")
        LightboxFactory.isAnImage({
            imageContainer,
            videoContainer,
            sourceVideo,
            currentMedia
        })
        const goToLeft = () => {
            if (index - 1 < 0) {
                index = medias.length
                if (index === medias.length) {
                    index = 0
                }
            } else {
                index-=1
            }
            currentMedia = medias[index]
            LightboxFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                currentMedia
            })
            titleImage.innerHTML = currentMedia.altText
        }
        const goToRight = () => {
            if (index + 1 < 0) {
                index = medias.length
                if (index === medias.length) {
                    index = 0
                }
            } else {
                index+=1
            }
            currentMedia = medias[index]
            LightboxFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                currentMedia
            })
            titleImage.innerHTML = currentMedia.altText
        }
        const closeWindow = () =>{
            carouselContainer.remove()
        }
        const arrowLeft = ArrowFactory.create({
            left: true,
            onClick: goToLeft,
            nameClass: "left-arrow"
        })
        const arrowRight = ArrowFactory.create({
            right: true,
            onClick : goToRight,
            nameClass: "right-arrow"
        })
        const closeButton = CloseFactory.create({
            onClick: closeWindow,
            nameClass: "lightbox-close-btn"
        })
        const keyboardEvents = (evt) => {
            switch(evt.key) {
                case "ArrowLeft":
                    goToLeft()
                    break
                case "ArrowRight":
                    goToRight()
                    break
                case "Escape":
                    closeWindow()
                    break
                default:
                    break
            }
        }
        window.addEventListener("keydown", keyboardEvents)

        imageContainer.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`
        sourceVideo.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
        videoContainer.appendChild(sourceVideo)
        containerLightBox.appendChild(imageContainer)
        containerLightBox.appendChild(videoContainer)
        containerLightBox.appendChild(titleImage)

        carouselContainer.appendChild(containerLightBox)
        carouselContainer.appendChild(closeButton)
        carouselContainer.appendChild(arrowLeft)
        carouselContainer.appendChild(arrowRight)
        containerLightBox.classList.add("container-lightbox")
        carouselContainer.classList.add("overlay-gallery")
        imageContainer.classList.add("lightbox-media")
        videoContainer.classList.add("lightbox-media")
        titleImage.classList.add("title-photo-gallery")
        containerLightBox.setAttribute("aria-label", "image-closeup-view")
        containerLightBox.setAttribute("role", "Dialog")
        titleImage.setAttribute("role", "Text")
        videoContainer.controls = true
        titleImage.innerHTML = currentMedia.altText
        return carouselContainer
    }

    static isAnImage({
        imageContainer,
        videoContainer,
        sourceVideo,
        currentMedia
    })
    {
        const imageParam = imageContainer
        const videoParam = videoContainer
        const sourceParam = sourceVideo

        if (currentMedia.image) {
            imageParam.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`
            videoParam.style.display= "none"
            imageParam.style.display = "block"
            imageParam.alt = currentMedia.altText
            imageParam.setAttribute("aria-label", `${currentMedia.altText}, closeup view`)
            imageParam.setAttribute("role", "Image link")
        }else{
            sourceParam.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
            videoParam.appendChild(sourceParam)
            imageParam.style.display= "none"
            videoParam.style.display = "block"
            videoParam.setAttribute("aria-label", `${currentMedia.altText}, closeup view`)
            videoParam.setAttribute("role", "Video link")
        }
    }
}