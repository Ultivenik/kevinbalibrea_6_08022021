import TitleFactory from '../infoMainPage/TitleFactory';
import ArrowFactory from './ArrowFactory'
import CloseFactory from './CloseFactory';

const mediaPath = "./../SamplePhotos"

export default class CarouselFactory {
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
        const titleImage = TitleFactory.create("h3", currentIndex.altText, "title-photo-gallery")
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
            CarouselFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                currentMedia
            })
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
            CarouselFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                currentMedia
            })
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

        imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
        sourceVideo.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
        videoContainer.appendChild(sourceVideo)
        containerLightBox.appendChild(imageContainer)
        containerLightBox.appendChild(videoContainer)
        containerLightBox.appendChild(titleImage)
        containerLightBox.classList.add("container-lightbox")
        containerLightBox.setAttribute("aria-label", "image-closeup-view")
        carouselContainer.classList.add("overlay-gallery")
        imageContainer.classList.add("lightbox-media")
        videoContainer.classList.add("lightbox-media")
        carouselContainer.appendChild(containerLightBox)
        carouselContainer.appendChild(closeButton)
        carouselContainer.appendChild(arrowLeft)
        carouselContainer.appendChild(arrowRight)
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
            imageParam.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
            videoParam.style.display ="none"
            imageParam.style.display = "block"
        }else{
            sourceParam.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
            videoParam.setAttribute("controls", "")
            videoParam.appendChild(sourceParam)
            imageParam.style.display = "none"
            videoParam.style.display = "block"
        }

    }
}