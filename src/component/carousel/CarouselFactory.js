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
        const goToLeft = () => {
            if (index - 1 < 0) {
                index = medias.length;
            } else {
                index--
            }
            currentMedia = medias[index]
            if (imageContainer) {
                imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
                containerLightBox.appendChild(imageContainer)
            }
            if (videoContainer) {
                sourceVideo.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
                videoContainer.appendChild(sourceVideo)
                containerLightBox.appendChild(videoContainer)
            }
        }
        const goToRight = () => {
            if (index + 1 < 0) {
                index = medias.length;
            } else {
                index++
            }
            currentMedia = medias[index]
            imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
        }
        const closeWindow = () =>{
            carouselContainer.remove()
        }
        const arrowLeft = ArrowFactory.create({
            left: true,
            onClick: goToLeft
        })
        const arrowRight = ArrowFactory.create({
            right: true,
            onClick : goToRight
        })
        const closeButton = CloseFactory.create({
            onClick: closeWindow
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
            }
        }
        window.addEventListener("keydown", keyboardEvents)

        imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
        carouselContainer.appendChild(imageContainer)
        containerLightBox.classList.add("container-lightbox")
        containerLightBox.setAttribute("aria-label", "image-closeup-view")
        carouselContainer.classList.add("overlay-gallery")
        carouselContainer.appendChild(containerLightBox)
        carouselContainer.appendChild(closeButton)
        carouselContainer.appendChild(arrowLeft)
        carouselContainer.appendChild(arrowRight)
        return carouselContainer
    }
}