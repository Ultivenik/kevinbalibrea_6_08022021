import ArrowFactory from './ArrowFactory'
import CloseFactory from './CloseFactory'

const mediaPath = "/kevinbalibrea_6_08022021/dist/SamplePhotos"

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
        const goToLeft = () => {
            if (index - 1 === 0) {
                index = medias.length -1
            } else {
                index-=1
            }
            currentMedia = medias[index]
            LightboxFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                currentMedia,
                containerLightBox,
                titleImage
            })
        }
        const goToRight = () => {
            if (index + 1 === medias.length) {
                index = 0
            } else {
                index+=1
            }
            currentMedia = medias[index]
            LightboxFactory.isAnImage({
                imageContainer,
                videoContainer,
                sourceVideo,
                currentMedia,
                containerLightBox,
                titleImage
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
        LightboxFactory.isAnImage({
            imageContainer,
            videoContainer,
            sourceVideo,
            currentMedia,
            containerLightBox,
            titleImage
        })

        if (currentMedia.image) {
            imageContainer.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`
        }
        if(currentMedia.video){
            sourceVideo.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
            videoContainer.controls = true
            videoContainer.appendChild(sourceVideo)
        }
        containerLightBox.appendChild(titleImage)
        carouselContainer.appendChild(containerLightBox)
        carouselContainer.appendChild(closeButton)
        carouselContainer.appendChild(arrowLeft)
        carouselContainer.appendChild(arrowRight)
        containerLightBox.classList.add("container-lightbox")
        carouselContainer.classList.add("overlay-gallery")
        carouselContainer.id = "lightbox"
        imageContainer.classList.add("lightbox-media")
        videoContainer.classList.add("lightbox-media")
        titleImage.classList.add("title-photo-gallery")
        containerLightBox.setAttribute("aria-label", "image-closeup-view")
        containerLightBox.setAttribute("role", "Dialog")
        titleImage.setAttribute("role", "Text")
        titleImage.innerHTML = currentMedia.altText
        return carouselContainer
    }

    // method to check what media is in the lightbox while navigation
    static isAnImage({
        imageContainer,
        videoContainer,
        sourceVideo,
        currentMedia,
        containerLightBox,
        titleImage
    })
    {
        const imageParam = imageContainer
        const videoParam = videoContainer
        const sourceParam = sourceVideo
        const titleParam = titleImage
        // Give the right attribute to the right media
        if (currentMedia.image) {
            imageParam.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.image}`
            imageParam.alt = currentMedia.altText
            imageParam.setAttribute("aria-label", `${currentMedia.altText}, closeup view`)
            imageParam.setAttribute("role", "Image link")

            titleImage.innerHTML = currentMedia.altText
        }else{
            sourceParam.src = `${mediaPath}/${currentMedia.photographerId}/${currentMedia.video}`
            videoParam.appendChild(sourceParam)
            videoParam.setAttribute("aria-label", `${currentMedia.altText}, closeup view`)
            videoParam.setAttribute("role", "Video link")
            videoParam.controls = true

            titleImage.innerHTML = currentMedia.altText
        }
        // Avoid displaying video and image in same time
        if (currentMedia.image) {
            containerLightBox.replaceChildren(imageParam, titleParam)
        }
        if (currentMedia.video) {
            containerLightBox.replaceChildren(videoParam, titleParam)
        }

        // resizing images to avoid overflows and depending on the screen width
        if (imageParam.naturalHeight > 2800 && window.screen.width > 1200) {
            imageParam.style.width = "34em"
        }else{
            imageParam.style.width = ""
        }
    }
}