import info from './../../FishEyeDataFR.json'
import Categories from './ElementFactory'
import Photographer from './photographers/Photographer'

export default class MainPage {
    static tags = [
        "Portrait",
        "Art",
        "Fashion",
        "Architecture",
        "Travel",
        "Sport",
        "Animals",
        "Events",
    ]

    // static DomElementContainer(element, classType)
    // {
    //     const domElement = document.createElement(element)
    //     domElement.classList.add(classType)
    //     return domElement
    // }

    // static DomElementContent(element, classType, content)
    // {
    //     const domElement = document.createElement(element)
    //     domElement.classList.add(classType)
    //     domElement.innerHTML = content
    //     return domElement
    // }

    // static ImageDOM(classImg, sourceImg, altIMG)
    // {
    //     const domElement = document.createElement('img')
    //     domElement.classList.add(classImg)
    //     domElement.src = sourceImg
    //     domElement.alt = altIMG
    //     return domElement
    // }

    // static LinksDOM(classLink, href, content)
    // {
    //     const domElement = document.createElement('a')
    //     domElement.classList.add(classLink)
    //     domElement.href = href
    //     domElement.innerHTML = content
    //     return domElement
    // }

    // static tagMap()
    // {
    //     const tag = this.tags.map(tag =>{
    //         let spanNav = document.createElement("span")
    //         let linkNav = document.createElement("a")

    //         linkNav.href = "#"
    //         spanNav.classList.add("tag")

    //         linkNav.innerHTML = "#" + tag
    //         spanNav.appendChild(linkNav)
    //         return spanNav
    //     })
    //     return tag
    // }

    // static profilesLinkMap(photographer)
    // {
    //     photographer.tags.map(tag =>{
    //         let profileSpan = document.createElement('span')
    //         let profileSpanLink = document.createElement('a')

    //         profileSpanLink.href = "#"
    //         profileSpan.classList.add(`tag`)
    //         profileSpanLink.innerHTML ="#" + tag
    //         return profileSpan
    //     })
    // }

// method template header
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

        this.tags.map(tag =>{
            let spanNav = document.createElement("span")
            let linkNav = document.createElement("a")

            linkNav.href = "#"
            spanNav.classList.add("tag")

            headerNav.appendChild(spanNav)
            spanNav.appendChild(linkNav)

            linkNav.innerHTML = "#" + tag
        })
    }

    static sortingProfile(e)
    {
        let tag = e.target.innerHTML
        tag = tag.toLowerCase().substring(1, tag.length)
        let photographers = info.photographers.map(item=> {return item})
        let idArray = []

        photographers.map( photographer => {
            let photographerProfile = document.querySelector(`#profile-${photographer.id}`)
            console.log(photographerProfile)
            if (photographer.tags.includes(tag) === false) {
                idArray.push(photographer.id)
            }
            photographerProfile.style.removeProperty("display")
        })

        idArray.forEach(id => {
            let photographerCard = document.querySelector(`#profile-${id}`)
            photographerCard.style.display = "none"
        })
    }

    //method template main landing page
    static DOMConstructMain()
    {
        let main = document.createElement("main")
        main.classList.add("main")
        let sectionContainer = document.createElement("section")

        sectionContainer.classList.add("profiles")

        document.body.appendChild(main)
        main.appendChild(sectionContainer)

        return sectionContainer
    }
    //method template profiles
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
        figure.id = "profile-" + photographer.id
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
            profileSpanLink.innerHTML = "#" + tag

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


}