import Events from './Events'
import Categories from './Categories'

export default class Assembly {
    static DOMConstructHeader()
    {
        let logoLink = document.createElement('a')
        let logoImg = document.createElement('img')
        let header = document.createElement("header")
        let headerNav = document.createElement("nav")

        logoLink.href = "index.html"
        logoImg.src = "./logo.png"

        header.classList.add("header")

        document.body.prepend(header)
        logoLink.appendChild(logoImg)
        header.appendChild(logoLink)
        header.appendChild(headerNav)

        Categories.tags.map(tag =>{
            let spanNav = document.createElement("span")
            let linkNav = document.createElement("a")

            linkNav.href = "#"
            spanNav.classList.add("tag")

            headerNav.appendChild(spanNav)
            spanNav.appendChild(linkNav)

            linkNav.innerHTML = "#" + tag
        })
    }

    static DOMConstructMain()
    {
        let main = document.createElement("main")
        let sectionContainer = document.createElement("section")

        main.classList.add("main")
        sectionContainer.classList.add("profiles")

        document.body.appendChild(main)
        main.appendChild(sectionContainer)

        return sectionContainer
    }

    static DOMConstructMainProfiles(photographer)
    {
        let figure = document.createElement("figure")
        let profileLink = document.createElement('a')
        let profileImg = document.createElement('img')
        let profileTitle = document.createElement('h2')
        let profileFigcaption = document.createElement('figcaption')
        let profiltCity = document.createElement('p')
        let profileQuote = document.createElement('p')
        let profilePrice = document.createElement('p')


        figure.classList.add("profile")
        profileLink.classList.add("img-profile-link")
        profileTitle.classList.add("name")
        profileFigcaption.classList.add("info-profile")
        profiltCity.classList.add("city")
        profileQuote.classList.add("quote")
        profilePrice.classList.add("price")

        profileLink.href = "#"
        profileImg.src = photographer.portrait
        profileImg.alt = `photo profil de ${photographer.name}`
        profileImg.classList.add(`img-${photographer.id}`)

        photographer.tags.map(tag =>{
            let profileSpan = document.createElement('span')
            let profileSpanLink = document.createElement('a')

            profileSpanLink.href = "#"
            profileSpan.classList.add(`tag`)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.appendChild(profileSpanLink)
            profileFigcaption.appendChild(profileSpan)
        })

        profileTitle.innerHTML = photographer.name
        profiltCity.innerHTML = `${photographer.city} ` + `${photographer.country}`
        profileQuote.innerHTML = photographer.tagline
        profilePrice.innerHTML = photographer.price + '€'

        figure.appendChild(profileLink)
        profileLink.appendChild(profileImg)
        figure.appendChild(profileTitle)
        figure.appendChild(profileFigcaption)
        profileFigcaption.appendChild(profiltCity)
        profileFigcaption.appendChild(profileQuote)
        profileFigcaption.appendChild(profilePrice)

        return figure
    }

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