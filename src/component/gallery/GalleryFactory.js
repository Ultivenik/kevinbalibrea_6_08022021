import info from './../../../FishEyeDataFR.json'

export default class GalleryFactory{
    static create(photographer)
    {
        let media = info.media
        let infoGallery = document.createElement("section")
        infoGallery.classList.add("gallery")

        let label = document.createElement("label")
        label.innerHTML = "Trier par"

        let input = document.createElement("select")
        input.classList.add("select")

        let optArray = ["Popularité", "Date", "Titre"]
        input.addEventListener('change', (e) => {
            let likesArr = []
            let dateArr = []
            let titleArr = []
            media.forEach(item =>{
                likesArr.push(item.likes)
                dateArr.push(item.date)
                titleArr.push(item.image)
                let likes = likesArr.sort((a, b) => b - a)
                let date = dateArr.sort((a, b) => b > a)
                let title = titleArr.sort((a, b) => b < a)
                console.log(title);
                switch (e.target.value) {
                    case "Popularité":
                        return likes
                        break;
                    case "Date":
                        return date
                        break;
                    case "Titre":
                        return title
                        break;
                    default:
                        break;
                }
            })
        })

        infoGallery.appendChild(label)
        infoGallery.appendChild(input)

        GalleryFactory.createOptions(optArray, input)
        GalleryFactory.createMedia(media, infoGallery, photographer)

        return infoGallery
    }

    static createOptions(optArray, input)
    {
        for (let i = 0; i < optArray.length; i++) {
            const optContent = optArray[i];
            let option = document.createElement("option")
            option.value = optContent
            option.text = optContent
            input.appendChild(option)
        }
    }

    static createMedia(media, infoGallery, photographer)
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