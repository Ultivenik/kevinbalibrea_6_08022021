import Events from './Events'
import Categories from './Categories'

export default class Assembly {
    static header()
    {
        let header = document.createElement("header")
        let logoLink = document.createElement('a')
        let logoImg = document.createElement('img')
        let headerNav = document.createElement("nav")
        let filterTag = new Categories()

        document.body.prepend(header)
        header.appendChild(logoLink)
        logoLink.appendChild(logoImg)
        header.appendChild(headerNav)

        header.classList.add("header")
        logoLink.href = "index.html"
        logoImg.src = "./logo.png"

        filterTag.tags.map(tag =>{
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

    static DOMConstruct(photographer)
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

        profileTitle.innerHTML = photographer.name
        profiltCity.innerHTML = `${photographer.city} ` + `${photographer.country}`
        profileQuote.innerHTML = photographer.tagline
        profilePrice.innerHTML = photographer.price + '€'

        photographer.tags.map(tag =>{
            let profileSpan = document.createElement('span')
            let profileSpanLink = document.createElement('a')

            profileSpanLink.href = "#"
            profileSpan.classList.add(`tag`)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.appendChild(profileSpanLink)
            profileFigcaption.appendChild(profileSpan)
        })

        figure.appendChild(profileLink)
        profileLink.appendChild(profileImg)
        figure.appendChild(profileTitle)
        figure.appendChild(profileFigcaption)
        profileFigcaption.appendChild(profiltCity)
        profileFigcaption.appendChild(profileQuote)
        profileFigcaption.appendChild(profilePrice)

        return figure
    }
}