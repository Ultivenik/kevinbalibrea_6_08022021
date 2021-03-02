import info from './../../../FishEyeDataFR.json'

export default class GalleryFactory{
    static create(photographer)
    {
        let media = info.media
        let infoGallery = document.createElement("section")
        infoGallery.classList.add("gallery")

        let label = document.createElement("label")
        label.innerHTML = "Trier par"

        let select = document.createElement("select")
        select.classList.add("select")

        let optArray = ["Popularité", "Date", "Titre"]
        //filtering photo by occurency
        select.addEventListener('change', (e) => {
            let likesArr = []
            let dateArr = []
            let titleArr = []
            media.map(item =>{
                switch (e.target.value) {
                    case "Popularité":
                        likesArr.push(item.likes)
                        likesArr.sort((a, b) => b - a)
                        break;
                    case "Date":
                        dateArr.push(item.date)
                        dateArr.sort((a, b) => b > a)
                        break;
                    case "Titre":
                        titleArr.push(item.image)
                        titleArr.sort((a, b) => b < a)
                        break;
                    default:
                        break;
                }
            })
        })

        infoGallery.appendChild(label)
        infoGallery.appendChild(select)

        GalleryFactory.createOptions(optArray, select)
        GalleryFactory.createPhotoGallery(media, infoGallery, photographer)

        return infoGallery
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
                photoFigure.classList.add('photoFigure')

                let photoLegend = document.createElement("figcaption")
                photoLegend.classList.add("photoLegend")

                if (path.image !== undefined) {
                    let imageGallery = document.createElement('img')
                    imageGallery.src =  path.image
                    photoFigure.appendChild(imageGallery)
                }else{
                    let videoGallery = document.createElement('video')
                    videoGallery.setAttribute("controls", "")
                    photoFigure.appendChild(videoGallery)

                    let sourceVideoGallery = document.createElement('source')
                    sourceVideoGallery.src = path.video
                    videoGallery.appendChild(sourceVideoGallery)
                }

                photoFigure.appendChild(photoLegend)
                GalleryFactory.createLikesPrice(photo, photoLegend)
                infoGallery.appendChild(photoFigure)
            }
        })
    }
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

        spanLikes.addEventListener('click', (e) =>{
            e.currentTarget.innerText = photo.likes++
            spanLikes.appendChild(icon)
        })
    }
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
            path.image = photoPath + name + '/' + photo.image
        } else {
            path.video = photoPath + name + '/' + photo.video
        }
    }
}