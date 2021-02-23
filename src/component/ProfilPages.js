export default class ProfilPages {
    static DOMConstructProfilesSection(ID)
    {
        this.DOMConstructHeader()
        document.querySelector("nav").remove()
        let infoProfile = document.createElement('section')
        let IDName = document.createElement("h2")
        let IDLocation = document.createElement("p")
        let IDTagline = document.createElement("p")
        let btnContact = document.createElement('button')

        infoProfile.appendChild(IDName)
        infoProfile.appendChild(IDLocation)
        infoProfile.appendChild(IDTagline)
        ID.tags.map(tag =>{
            let profileSpan = document.createElement('span')
            let profileSpanLink = document.createElement('a')

            profileSpanLink.href = "#"
            profileSpan.classList.add(`tag`)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.appendChild(profileSpanLink)
            infoProfile.appendChild(profileSpan)
        })
        infoProfile.appendChild(btnContact)

        let IDImg = document.createElement('img')
        IDImg.src = ID.portrait
        IDImg.alt = `photo profil de ${ID.name}`
        infoProfile.appendChild(IDImg)

        IDName.innerHTML = ID.name
        IDLocation.innerHTML = `${ID.city}` + `${ID.country}`
        IDTagline.innerHTML = ID.tagline
        btnContact.innerHTML = "Contactez-moi"

        infoProfile.classList.add("profileID")
        IDName.classList.add("name")
        IDLocation.classList.add("city")
        IDTagline.classList.add("quote")
        btnContact.classList.add('btn-contact')
        IDImg.classList.add("img-profile-link")

        return infoProfile
    }

    static DOMConstructGalery()
    {
        let infoGallery = document.createElement("section")
        document.createElement("label")
        document.createElement("input")
    }
}