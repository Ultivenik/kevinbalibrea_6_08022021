import info from "./../../../FishEyeDataFR.json"

export default class GalleryFactory{
    static create(photographer)
    {
        let media = info.media
        media.sort((a, b) => b.likes - a.likes)

        let infoGallery = document.createElement("section")
        infoGallery.classList.add("gallery")

        let label = document.createElement("label")
        label.innerHTML = "Trier par"
        document.querySelector(".main").appendChild(label)

        let select = document.createElement("select")
        select.classList.add("select")
        document.querySelector(".main").appendChild(select)

        let optArray = ["Popularité", "Date", "Titre"]
        //filtering photo by occurency
        select.addEventListener("change", (e) => {
            switch (e.target.value) {
                case "Popularité":
                    media.sort((a, b) => b.likes - a.likes)
                    break;
                case "Date":
                    media.sort((a, b) => {
                        a = a.date.split('-');
                        b = b.date.split('-');
                        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
                    })
                    break;
                case "Titre":
                    media.sort((a, b) => {
                        let aa = a.image !== undefined ? a.image : a.video
                        let bb = b.image !== undefined ? b.image : b.video
                        // return aa.localeCompare(bb)
                        return aa > bb
                    })
                    break;
            }
            GalleryFactory.deletePhotoGallery()
            GalleryFactory.createPhotoGallery(media, infoGallery, photographer)
        })

        GalleryFactory.createOptions(optArray, select)
        GalleryFactory.createPhotoGallery(media, infoGallery, photographer)

        return infoGallery
    }

    static deletePhotoGallery()
    {
        let photos = document.querySelectorAll(".photoFigure")
        photos.forEach((photo) => {
            photo.remove()
        })
    }

    static filterGallery(e, media)
    {

    }
    // creating option DOM method
    static createOptions(optArray, select)
    {
        for (let i = 0; i < optArray.length; i++) {
            const optContent = optArray[i];
            let option = document.createElement("option")
            option.value = optContent
            option.text = optContent
            select.appendChild(option)
        }
    }
    // create photo gallery method
    static createPhotoGallery(media, infoGallery, photographer)
    {
        media.map(photo =>{
            if (photo.photographerId === photographer.id) {
                let path = GalleryFactory.definePath(photographer.id, photo)
                let photoFigure = document.createElement("figure")
                photoFigure.classList.add("photoFigure")

                let photoLegend = document.createElement("figcaption")
                photoLegend.classList.add("photoLegend")

                if (path.image !== undefined) {
                    GalleryFactory.createImage(path.image, photoFigure)
                }else{
                    GalleryFactory.createVideo(path.video, photoFigure)
                }

                photoFigure.appendChild(photoLegend)
                GalleryFactory.createLikesPrice(photo, photoLegend)
                infoGallery.appendChild(photoFigure)
                GalleryFactory.createLightBoxEvent(photoFigure)
            }
        })
    }
    // lightbox open when clicking on a photo
    static createLightBoxEvent(photoFigure)
    {
        photoFigure.addEventListener("click", (e) => {
            e.target.classList.remove("media-gallery")
            e.target.classList.add("lightbox")
            let overlayGallery = document.createElement("div")
            overlayGallery.classList.add("overlay-gallery")
            document.querySelector(".main").appendChild(overlayGallery)
            GalleryFactory.createCloseButton(e, overlayGallery, overlayGallery)
            GalleryFactory.createLeftArrow(overlayGallery)
            GalleryFactory.createLeftArrow(overlayGallery)
            //avoid doublons
            e.target.addEventListener("click", () => {
                overlayGallery.remove()
            })
        })
    }
    // close lightbox when click on "X"
    static createCloseButton(e, overlay, parent)
    {
        let close = document.createElement("i")
        close.classList.add("fas", "fa-times", "lightbox-close-btn")
        close.addEventListener("click", () =>{
            overlay.remove()
            e.target.classList.remove("lightbox")
            e.target.classList.add("media-gallery")
        })
        parent.appendChild(close)
    }
    // left navigation lightbox
    static createLeftArrow(parent)
    {
        let leftArrow = document.createElement('i')
        leftArrow.classList.add("fas", "fa-chevron-left", "left-arrow")
        parent.appendChild(leftArrow)
    }
    // right navigation lightbox
    static createRightArrow(parent)
    {
        let rightArrow = document.createElement('i')
        rightArrow.classList.add("fas", "fa-chevron-right", "right-arrow")
        parent.appendChild(rightArrow)
    }
    // create gallery method
    static createImage(source, photoFigure)
    {
        let imageGallery = document.createElement("img")
        imageGallery.classList.add("media-gallery")
        imageGallery.src = source
        photoFigure.appendChild(imageGallery)
    }

    static createVideo(source, photoFigure)
    {
        let videoGallery = document.createElement("video")
        videoGallery.addEventListener('click', () =>{
            videoGallery.setAttribute("controls", "")
        })
        photoFigure.appendChild(videoGallery)

        let sourceVideoGallery = document.createElement("source")
        sourceVideoGallery.src = source
        videoGallery.appendChild(sourceVideoGallery)
    }
    // like button with like increment event and price
    static createLikesPrice(photo, photoLegend)
    {
        let spanPrice = document.createElement("span")
        spanPrice.classList.add("price-photo")
        spanPrice.innerHTML = photo.price + "€ "

        let spanLikes = document.createElement("span")
        spanLikes.classList.add("photo-likes")
        spanLikes.innerHTML = photo.likes

        let icon = document.createElement("i")
        icon.classList.add("fas", "fa-heart")
        spanLikes.innerHTML = photo.likes
        spanLikes.appendChild(icon)

        photoLegend.appendChild(spanPrice)
        photoLegend.appendChild(spanLikes)

        spanLikes.addEventListener("click", (e) =>{
            e.currentTarget.innerText = photo.likes++
            spanLikes.appendChild(icon)
            
        })
    }
    // implementation photos with photographers ID
    static definePath(photographerId, photo)
    {
        let path = {}
        switch (photographerId) {
            case 243:
                GalleryFactory.createPath("Mimi", path, photo)
                break;
            case 930:
                GalleryFactory.createPath("Ellie Rose", path, photo)
                break;
            case 82:
                GalleryFactory.createPath("Tracy", path, photo)
                break;
            case 527:
                GalleryFactory.createPath("Nabeel", path, photo)
                break;
            case 925:
                GalleryFactory.createPath("Rhode", path, photo)
                break;
            case 195:
                GalleryFactory.createPath("Marcel", path, photo)
                break;
        }
        return path
    }

    static createPath(name, path, photo)
    {
        const photoPath = "/SamplePhotos/"
        if (photo.image !== undefined) {
            path.image = photoPath + name + "/" + photo.image
        } else {
            path.video = photoPath + name + "/" + photo.video
        }
    }
}