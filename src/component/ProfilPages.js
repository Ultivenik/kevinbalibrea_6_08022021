import info from '../../FishEyeDataFR.json'

export default class ProfilPages {
    static changePage(photographer)
    {
        document.querySelector(".main").innerHTML= ""
        document.querySelector("nav").remove()

        let infoProfile = document.createElement('section')
        let IDName = document.createElement("h2")
        let IDLocation = document.createElement("p")
        let IDTagline = document.createElement("p")
        let btnContact = document.createElement('button')

        infoProfile.appendChild(IDName)
        infoProfile.appendChild(IDLocation)
        infoProfile.appendChild(IDTagline)

        photographer.tags.map(tag =>{
            let profileSpan = document.createElement('span')
            let profileSpanLink = document.createElement('a')
            profileSpanLink.href = "#"
            profileSpan.appendChild(profileSpanLink)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.classList.add(`tag`)
            infoProfile.appendChild(profileSpan)
        })
        infoProfile.appendChild(btnContact)

        let IDImg = document.createElement('img')
        infoProfile.appendChild(IDImg)

        IDImg.src ="./../SamplePhotos/Photographers_ID_Photos/" + photographer.portrait
        IDImg.alt = `photo profil de ${photographer.name}`
        IDName.innerHTML = photographer.name
        IDLocation.innerHTML = `${photographer.city}` + `${photographer.country}`
        IDTagline.innerHTML = photographer.tagline
        btnContact.innerHTML = "Contactez-moi"

        infoProfile.classList.add("profileID")
        IDName.classList.add("name")
        IDLocation.classList.add("city")
        IDTagline.classList.add("quote")
        btnContact.classList.add('btn-contact')
        IDImg.classList.add("img-profile-link")

        document.querySelector(".main").appendChild(infoProfile)
        let media = info.media
        let infoGallery = document.createElement("section")
        let label = document.createElement("label")
        let input = document.createElement("select")
        let optArray = ["Popularité", "Date", "Titre"]


        input.classList.add("select")
        infoGallery.appendChild(label)
        infoGallery.appendChild(input)

        label.innerHTML = "Trier par"
        for (let i = 0; i < optArray.length; i++) {
            const optContent = optArray[i];
            let option = document.createElement("option")
            option.value = optContent
            option.text = optContent
            input.appendChild(option)
        }
        media.map(photos =>{
            let photoFigure = document.createElement("figure")
            let photoLegend = document.createElement("figcaption")
            let spanPrice = document.createElement("span")
            let spanLikes = document.createElement("span")
            let imageGallery = document.createElement('img')
            let videoGallery = document.createElement('video')
            let sourceVideoGallery = document.createElement('source')

            photoFigure.appendChild(imageGallery)
            photoFigure.appendChild(photoLegend)
            videoGallery.appendChild(sourceVideoGallery)
            infoGallery.appendChild(videoGallery)
            imageGallery.src =  photos.image

            sourceVideoGallery.src =  photos.video
            spanPrice.innerHTML = photos.price + "€ "
            spanLikes.innerHTML = photos.likes  + '<i class="fas fa-heart"></i>'
            photoLegend.appendChild(spanPrice)
            photoLegend.appendChild(spanLikes)
            infoGallery.appendChild(photoFigure)
        })
        document.querySelector(".main").appendChild(infoGallery)
    }
}