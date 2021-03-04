
const mediaPath = "./../SamplePhotos"

export class CarouselFactory {
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
        const arrowLeft = ArrowFactory.create({
            left: true,
            onClick: goToLeft
        })
        const keyboardEvents = (evt) => {
            switch(evt.key) {
                case "ArrowLeft":
                    goToLeft()
                    break;
                case "ArrowRight":
                    break;
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
        return carouselContainer;
    }
}


class ArrowFactory {
    static create({
        onClick,
    }) {
        const arrowElement = document.createElement('button')
        arrowElement.addEventListener("click", onClick)
        return arrowElement
    }
}