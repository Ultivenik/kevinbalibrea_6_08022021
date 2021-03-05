import info from "./../../../FishEyeDataFR.json"
import {CarouselFactory} from '../carousel/CarouselFactory'
import {getPhotographerById} from '../../helpers/data'
import {ImageFactory} from '../image/ImageFactory'

const mediaPath = "./../SamplePhotos"

export default class GalleryFactory{
    static create(photographer)
    {
        let medias = info.media
        medias.sort((a, b) => b.likes - a.likes)

        const infoGallery = document.createElement("section")
        infoGallery.classList.add("gallery")

        const label = document.createElement("label")
        label.classList.add("label-list")
        label.innerHTML = "Trier par"
        document.querySelector(".main").appendChild(label)

        const select = document.createElement("select")
        select.classList.add("select-list")
        document.querySelector(".main").appendChild(select)

        let optArray = ["Popularité", "Date", "Titre"]
        //filtering photo by occurency
        select.addEventListener("change", (e) => {
            switch (e.target.value) {
                case "Popularité":
                    medias.sort((a, b) => b.likes - a.likes)
                    break;
                case "Date":
                    medias.sort((a, b) => {
                        a = a.date.split('-');
                        b = b.date.split('-');
                        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
                    })
                    break;
                case "Titre":
                    medias.sort((a, b) => {
                        let aa = a.image !== undefined ? a.image : a.video
                        let bb = b.image !== undefined ? b.image : b.video
                        return aa > bb
                    })
                    break;
            }
            GalleryFactory.deletePhotoGallery()
            GalleryFactory.createPhotoGallery(medias.filter((media) => media.photographerId === photographer.id), infoGallery)
        })

        GalleryFactory.createOptions(optArray, select)
        GalleryFactory.createPhotoGallery(medias.filter((media) => media.photographerId === photographer.id), infoGallery)

        return infoGallery
    }

    static deletePhotoGallery()
    {
        const photos = document.querySelectorAll(".photoFigure")
        photos.forEach((photo) => {
            photo.remove()
        })
    }

    // creating option DOM method
    static createOptions(optArray, select)
    {
        for (let i = 0; i < optArray.length; i++) {
            const optContent = optArray[i];
            const option = document.createElement("option")
            option.classList.add("occurency-list")
            option.value = optContent
            option.text = optContent
            select.appendChild(option)
        }
    }
    // create photo gallery method
    static createPhotoGallery(medias, infoGallery)
    {
        let carousel;
        medias.map((media, index) =>{
                const mediaFigure = document.createElement("figure")
                mediaFigure.classList.add("photoFigure")

                const mediaLegend = document.createElement("figcaption")
                mediaLegend.classList.add("photoLegend")

                if (media.image) {
                    const image = ImageFactory.create({
                        source: `${mediaPath}/${media.photographerId}/${media.image}`,
                        text: media.altText,
                    })
                    image.addEventListener("click", () => {
                        let carousel = CarouselFactory.create({
                            medias,
                            currentIndex: index,
                            onClose: () => {
                                document.querySelector(".main").removeChild(carousel)
                            }
                        })
                        document.querySelector(".main").appendChild(carousel)
                    })
                    mediaFigure.appendChild(image)
                }else{
                    //GalleryFactory.createVideo(path.video, photo.altText, photoFigure,)
                }

                mediaFigure.appendChild(mediaLegend)
                //GalleryFactory.createLegendTitle(photo.altText, photoLegend)
                //GalleryFactory.createPrice(photo.price, photoLegend)
                //GalleryFactory.createLikes(photo.likes, photoLegend)
                //GalleryFactory.createDatePhoto(photo.date, photoLegend)
                infoGallery.appendChild(mediaFigure)
            }
        )
    }

    static createDatePhoto(date, parent)
    {
        const dateTime = document.createElement("time")
        dateTime.classList.add("date-time")
        dateTime.setAttribute("datetime", date)
        dateTime.innerHTML = date
        parent.appendChild(dateTime)
    }
    static createLegendTitle(photo, parent)
    {
        const title = document.createElement("h3")
        title.classList.add("title-photo-gallery")
        title.innerHTML = photo
        parent.appendChild(title)
    }

    // lightbox open when clicking on a photo
    static createLightBoxEvent(media, index, photographerId)
    {
        const overlayGallery = document.createElement("div")
        const containerLightBox = document.createElement("div")
        containerLightBox.classList.add("container-lightbox")
        containerLightBox.setAttribute("aria-label", "image-closeup-view")

        const currentImage = document.createElement("img")
        containerLightBox.appendChild(currentImage)
        currentImage.src = GalleryFactory.definePath(photographerId, media[index]).image

        overlayGallery.classList.add("overlay-gallery")
        document.querySelector(".main").appendChild(overlayGallery)
        let indexImage = index

        overlayGallery.appendChild(containerLightBox)
    }
    // close lightbox when click on "X"
    static createCloseButton(e, overlay, parent)
    {
        const close = document.createElement("i")
        close.classList.add("fas", "fa-times", "lightbox-close-btn")
        close.addEventListener("click", () =>{
            GalleryFactory.createCloseLightBox(e.target, overlay)
        })
        document.addEventListener("keydown", (event) =>{
            if (event.key === "Escape") {
                GalleryFactory.createCloseLightBox(e.target, overlay)
            }
        })
        parent.appendChild(close)
    }
    static createCloseLightBox(eventTarget, overlay)
    {
            overlay.remove()
            eventTarget.classList.remove("lightbox")
            eventTarget.classList.add("media-gallery")
            eventTarget.removeAttribute("controls")
    }
    // left navigation lightbox
    static createLeftArrow(parent)
    {
        const leftArrow = document.createElement('i')
        leftArrow.classList.add("fas", "fa-chevron-left", "left-arrow")
        parent.appendChild(leftArrow)
        leftArrow.addEventListener('click', (e) =>{

        })
    }
    // right navigation lightbox
    static createRightArrow(parent)
    {
        const rightArrow = document.createElement('i')
        rightArrow.classList.add("fas", "fa-chevron-right", "right-arrow")
        parent.appendChild(rightArrow)

        rightArrow.addEventListener("click", (e) => {

        })
    }
    // create gallery method
    static createImage(source, altText)
    {
        console.info(source)
        const imageGallery = document.createElement("img")
        imageGallery.classList.add("media-gallery")
        imageGallery.setAttribute("src", source)
        imageGallery.alt = altText
        imageGallery.dataset.altText = altText
        return imageGallery
    }

    static createVideo(source, altText, photoFigure)
    {
        const videoGallery = document.createElement("video")
        videoGallery.addEventListener('click', () =>{
            videoGallery.setAttribute("controls", "")
        })
        videoGallery.dataset.altText = altText
        photoFigure.appendChild(videoGallery)

        const sourceVideoGallery = document.createElement("source")
        sourceVideoGallery.src = source
        videoGallery.appendChild(sourceVideoGallery)
    }

    static createPrice(photo, photoLegend)
    {
        const spanPrice = document.createElement("span")
        spanPrice.classList.add("price-photo")
        spanPrice.innerHTML = photo + "  €  "
        photoLegend.appendChild(spanPrice)
    }
    // like button with like increment event and price
    static createLikes(photo, photoLegend)
    {
        const spanLikes = document.createElement("span")
        spanLikes.classList.add("photo-likes")
        spanLikes.innerHTML = photo+ "  "

        const icon = document.createElement("i")
        icon.classList.add("fas", "fa-heart")
        icon.setAttribute("aria-label", "likes")

        spanLikes.appendChild(icon)
        photoLegend.appendChild(spanLikes)

        spanLikes.addEventListener("click", (e) =>{
            e.currentTarget.innerText = photo++
            spanLikes.appendChild(icon)
        })
    }
}

