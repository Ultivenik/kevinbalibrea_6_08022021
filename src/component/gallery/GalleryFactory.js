import info from "../../../FishEyeDataFR.json"
import LightboxFactory from '../carousel/LightboxFactory'
import ImageFactory from '../media/ImageFactory'
import LabelFactory from '../infoProfile/LabelFactory'
import SelectFactory from "./SelectFactory"
import VideoFactory from "../media/VideoFactory"
import DatetimeFactory from "./DateTimeFactory"
import PricePhotoFactory from "./PricePhotoFactory"
import CounterLikesFactory from "./CounterLikesFactory"
import SortOptionFactory from "./SortOptionFactory"
import TitleFactory from "../infoMainPage/TitleFactory"
import IconFactory from "./IconFactory"
import TotalLikesFactory from "./TotalLikesFactory"
import TotalPriceFactory from "./TotalPriceFactory"

const mediaPath = "/kevinbalibrea_6_08022021/dist/SamplePhotos"

export default class GalleryFactory{
    static create(photographer)
    {
        // sorted by popularity by default
        const medias = info.media
        const photographers = info.photographers
        medias.sort((a, b) => b.likes - a.likes)

        const infoGallery = document.createElement("section")
        infoGallery.classList.add("gallery")

        const containerTotalLikes = document.createElement("div")
        containerTotalLikes.classList.add("container-total-likes")
        const totalLikes = TotalLikesFactory.create(medias.filter((media) => media.photographerId === photographer.id))
        const totalPrice = TotalPriceFactory.create(photographers.filter((photo) => photo.price === photographer.price))

        const label = LabelFactory.create("label-list", "Trier par", "category")
        const optArray = ["Popularité", "Date", "Titre"]
        const select = SelectFactory.create("select-list", "category")
        for (let i = 0; i < optArray.length; i+=1) {
            const element = optArray[i];
            const options = SortOptionFactory.create(element)
            select.appendChild(options)
        }

        // filtering photo by occurency
        select.addEventListener("change", (e) => {
            switch (e.target.value) {
                case "Popularité":
                    medias.sort((a, b) => b.likes - a.likes)
                    break
                case "Date":
                    medias.sort((a, b) => {
                        let aParam = a
                        let bParam = b
                        aParam = a.date.split('-')
                        bParam = b.date.split('-')
                        return aParam[0] - bParam[0] || aParam[1] - bParam[1] || aParam[2] - bParam[2]
                    })
                    break
                case "Titre":
                    medias.sort((a, b) => {
                        const aa = a.altText
                        const bb = b.altText
                        return aa > bb
                    })
                    break
                default:
                    break
            }
            GalleryFactory.deletePhotoGallery()
            GalleryFactory.createPhotoGallery(
                medias.filter((media) => media.photographerId === photographer.id),
                infoGallery
            )
        })

        GalleryFactory.createPhotoGallery(
            medias.filter((media) => media.photographerId === photographer.id),
            infoGallery
        )

        document.querySelector(".main").appendChild(label)
        document.querySelector(".main").appendChild(select)
        document.querySelector(".main").appendChild(containerTotalLikes)
        containerTotalLikes.appendChild(totalLikes)
        containerTotalLikes.appendChild(totalPrice)
        containerTotalLikes.setAttribute("role", "Text")
        label.setAttribute("role", "Input label")
        return infoGallery
    }

    static deletePhotoGallery()
    {
        const photos = document.querySelectorAll(".photoFigure")
        photos.forEach((photo) => {
            photo.remove()
        })
    }

    // create photo gallery method
    static createPhotoGallery(medias, infoGallery)
    {
        let carousel
        medias.map((media, index) =>{
            const mediaFigure = document.createElement("figure")
            mediaFigure.classList.add("photoFigure")

            const mediaLegend = document.createElement("figcaption")
            mediaLegend.classList.add("photoLegend")

            if (media.image) {
                const linkImage = document.createElement("a")
                linkImage.classList.add("link-image")
                linkImage.href = "#"
                linkImage.setAttribute("role", "Image link")
                const image = ImageFactory.create({
                    source: `${mediaPath}/${media.photographerId}/${media.image}`,
                    text: media.altText,
                })
                linkImage.addEventListener("click", () => {
                    carousel = LightboxFactory.create({
                        medias,
                        currentIndex: index
                    })
                    document.querySelector(".main").appendChild(carousel)
                })
                linkImage.appendChild(image)
                mediaFigure.appendChild(linkImage)
            }else{
                const video = VideoFactory.create({
                    source : `${mediaPath}/${media.photographerId}/${media.video}`,
                    text: media.altText
                })
                video.addEventListener("click", () =>{
                    carousel = LightboxFactory.create({
                        medias,
                        currentIndex: index
                    })
                    document.querySelector(".main").appendChild(carousel)
                })
                mediaFigure.appendChild(video)
            }
            const dateTime = DatetimeFactory.create(media.date)
            const titlePhoto = TitleFactory.create("h3", media.altText, "title-photo-gallery")
            const pricePhoto = PricePhotoFactory.create(media.price)
            const likesPhoto = CounterLikesFactory.create("photo-likes", media.likes)
            const iconLike = IconFactory.create()
            likesPhoto.addEventListener("click", CounterLikesFactory.eventLikes(likesPhoto, iconLike, media.likes))

            titlePhoto.setAttribute("role", "Text")
            pricePhoto.setAttribute("role", "Text")
            likesPhoto.setAttribute("role", "Text")
            iconLike.setAttribute("role", "Image")
            mediaFigure.appendChild(mediaLegend)
            mediaLegend.appendChild(titlePhoto)
            mediaLegend.appendChild(dateTime)
            mediaLegend.appendChild(pricePhoto)
            mediaLegend.appendChild(likesPhoto)
            likesPhoto.appendChild(iconLike)
            infoGallery.appendChild(mediaFigure)
            return mediaFigure
        })
    }
}