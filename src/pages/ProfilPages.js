import InfoProfileFactory from '../component/infoProfile/InfoProfileFactory'
import GalleryFactory from '../component/gallery/GalleryFactory'

export default class ProfilPages {
    // Change page method at clicking on profile
    static changePage(photographer)
    {
        document.querySelector(".main").innerHTML = ""
        document.querySelector("nav").remove()

        ProfilPages.displayInfoProfile(photographer)
        ProfilPages.displayGallery(photographer)
    }

    // display information of profile with datas and form feature
    static displayInfoProfile(photographer)
    {
        const infoProfile = InfoProfileFactory.create(photographer)
        document.querySelector(".main").appendChild(infoProfile)
    }

    // display photo gallery with pictures features
    static displayGallery(photographer)
    {
        const gallery = GalleryFactory.create(photographer)
        document.querySelector(".main").appendChild(gallery)
    }
}