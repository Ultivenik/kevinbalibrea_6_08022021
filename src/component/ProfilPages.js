import info from '../../FishEyeDataFR.json'

export default class ProfilPages {
    static DOMConstructProfilesSection(ID)
    {
        let photographerData = info.photographers
        let infoProfile = document.createElement('section')
        let IDName = document.createElement("h2")
        let IDLocation = document.createElement("p")
        let IDTagline = document.createElement("p")
        let btnContact = document.createElement('button')

        infoProfile.appendChild(IDName)
        infoProfile.appendChild(IDLocation)
        infoProfile.appendChild(IDTagline)

        let profileSpan = document.createElement('span')
        let profileSpanLink = document.createElement('a')

        profileSpanLink.href = "#"
        profileSpan.appendChild(profileSpanLink)
        infoProfile.appendChild(profileSpan)
        infoProfile.appendChild(btnContact)

        let IDImg = document.createElement('img')
        infoProfile.appendChild(IDImg)

        photographerData.map(ID =>{
            profileSpanLink.innerHTML ="#" + ID.tags
            IDImg.src = ID.portrait
            IDImg.alt = `photo profil de ${ID.name}`
            IDName.innerHTML = ID.name
            IDLocation.innerHTML = `${ID.city}` + `${ID.country}`
            IDTagline.innerHTML = ID.tagline
        })
        btnContact.innerHTML = "Contactez-moi"

        infoProfile.classList.add("profileID")
        IDName.classList.add("name")
        IDLocation.classList.add("city")
        IDTagline.classList.add("quote")
        profileSpan.classList.add(`tag`)
        btnContact.classList.add('btn-contact')
        IDImg.classList.add("img-profile-link")

        document.querySelector(".main").appendChild("infoProfile")
        return infoProfile
    }

    static DOMConstructGalery()
    {
        let infoGallery = document.createElement("section")
        document.createElement("label")
        document.createElement("input")
    }

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

        let profileSpan = document.createElement('span')
        let profileSpanLink = document.createElement('a')

        profileSpanLink.href = "#"
        profileSpan.appendChild(profileSpanLink)
        infoProfile.appendChild(profileSpan)
        infoProfile.appendChild(btnContact)

        let IDImg = document.createElement('img')
        infoProfile.appendChild(IDImg)

        profileSpanLink.innerHTML ="#" + photographer.tags
        IDImg.src = photographer.portrait
        IDImg.alt = `photo profil de ${photographer.name}`
        IDName.innerHTML = photographer.name
        IDLocation.innerHTML = `${photographer.city}` + `${photographer.country}`
        IDTagline.innerHTML = photographer.tagline
        btnContact.innerHTML = "Contactez-moi"

        infoProfile.classList.add("profileID")
        IDName.classList.add("name")
        IDLocation.classList.add("city")
        IDTagline.classList.add("quote")
        profileSpan.classList.add(`tag`)
        btnContact.classList.add('btn-contact')
        IDImg.classList.add("img-profile-link")

        document.querySelector(".main").appendChild(infoProfile)
    }
}