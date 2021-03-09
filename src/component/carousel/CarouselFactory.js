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
                index = medias.length
                if (index === medias.length) {
                    index = 0
                }
            } else {
                index--
            }
            currentMedia = medias[index]
            CarouselFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                mediaPath,
                currentMedia,
            })
        }
        const goToRight = () => {
            if (index + 1 < 0) {
                index = medias.length
                if (index === medias.length) {
                    index = 0
                }
            } else {
                index++
            }
            currentMedia = medias[index]
            CarouselFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                mediaPath,
                currentMedia,
            })
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
        sourceVideo.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
        videoContainer.appendChild(sourceVideo)
        containerLightBox.appendChild(imageContainer)
        containerLightBox.appendChild(videoContainer)
        containerLightBox.classList.add("container-lightbox")
        containerLightBox.setAttribute("aria-label", "image-closeup-view")
        carouselContainer.classList.add("overlay-gallery")
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
        mediaPath,
        currentMedia,
    })
    {
            if (currentMedia.hasOwnProperty("image")) {
                console.log('taratata');
                imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
                videoContainer.style.display ="none"
                imageContainer.style.display = "block"
            }else{
                console.log('torototo');
                sourceVideo.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
                videoContainer.setAttribute("controls", "")
                videoContainer.appendChild(sourceVideo)
                imageContainer.style.display = "none"
                videoContainer.style.display = "block"
            }
    }
}