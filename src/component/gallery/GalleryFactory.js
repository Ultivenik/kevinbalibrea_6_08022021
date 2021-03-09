import info from "./../../../FishEyeDataFR.json"
import CarouselFactory from '../carousel/CarouselFactory'
import {ImageFactory} from '../media/ImageFactory'
import LabelFactory from './LabelFactory'
import SelectFactory from "./SelectFactory"
import VideoFactory from "../media/VideoFactory"
import DatetimeFactory from "./DateTimeFactory"
import TitleMediaFactory from "./TitleMediaFactory"
import PricePhotoFactory from "./PricePhotoFactory"
import CounterLikesFactory from "./CounterLikesFactory"
import SortOptionFactory from "./SortOptionFactory"

const mediaPath = "./../SamplePhotos"

export default class GalleryFactory{
    static create(photographer)
    {
        // sorted by popularity by default
        let medias = info.media
        medias.sort((a, b) => b.likes - a.likes)

        const infoGallery = document.createElement("section")
        infoGallery.classList.add("gallery")

        const label = LabelFactory.create("label-list", "Trier par")
        const select = SelectFactory.create("select-list")
        const option = SortOptionFactory.create()

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

        GalleryFactory.createPhotoGallery(medias.filter((media) => media.photographerId === photographer.id), infoGallery)

        document.querySelector(".main").appendChild(label)
        document.querySelector(".main").appendChild(select)
        select.appendChild(option)

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
                        carousel = CarouselFactory.create({
                            medias,
                            currentIndex: index,
                        })
                        document.querySelector(".main").appendChild(carousel)
                    })
                    mediaFigure.appendChild(image)
                }else{
                    const video = VideoFactory.create({
                        source : `${mediaPath}/${media.photographerId}/${media.video}`,
                        altText: media.altText
                    })
                    video.addEventListener("click", () =>{
                        carousel = CarouselFactory.create({
                            medias,
                            currentIndex: index
                        })
                        document.querySelector(".main").appendChild(carousel)
                    })
                    mediaFigure.appendChild(video)
                }
                const dateTime = DatetimeFactory.create(media.date)
                const titlePhoto = TitleMediaFactory.create(media.altText)
                const pricePhoto = PricePhotoFactory.create(media.price)
                const likesPhoto = CounterLikesFactory.create(media.likes)

                mediaFigure.appendChild(mediaLegend)
                mediaLegend.appendChild(titlePhoto)
                mediaLegend.appendChild(dateTime)
                mediaLegend.appendChild(pricePhoto)
                mediaLegend.appendChild(likesPhoto)
                infoGallery.appendChild(mediaFigure)
            }
        )
    }
}

