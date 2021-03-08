import ArrowFactory from './ArrowFactory'
const mediaPath = "./../SamplePhotos"

export default class CarouselFactory {
    static create({
        medias,
        currentIndex = 0,
        onClose,
    }) {
        const carouselContainer = document.createElement("div")
        const containerLightBox = document.createElement("div")
        let index = currentIndex;
        let currentMedia = medias[index]
        const imageContainer = document.createElement("img")
        const goToLeft = (evt) => {
            if (index - 1 < 0) {
                index = medias.length;
            } else {
                index--
            }
            currentMedia = medias[index]
            imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
        }
        const goToRight = (evt) => {
            if (index + 1 < 0) {
                index = medias.length;
            } else {
                index++
            }
            currentMedia = medias[index]
            imageContainer.setAttribute('src', `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`)
        }
        const arrowLeft = ArrowFactory.create({
            left: true,
            onClick: goToLeft
        })
        const arrowRight = ArrowFactory.create({
            right: true,
            onClick : goToRight
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
        carouselContainer.appendChild(arrowLeft)
        carouselContainer.appendChild(arrowRight)
        return carouselContainer
    }
}