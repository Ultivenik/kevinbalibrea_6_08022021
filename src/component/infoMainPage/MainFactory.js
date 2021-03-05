import ProfilPages from '../../pages/ProfilPages'
import info from './../../../FishEyeDataFR.json'
import PhotographerFactory from './../photographers/PhotographerFactory'

export default class MainFactory
{
    static create(parent)
    {
        MainFactory.createMainTitlePage(parent)
        MainFactory.createSectionProfiles(parent)
    }
    //method template main landing page
    static createSectionProfiles(parent)
    {
        const sectionContainer = document.createElement("section")
        sectionContainer.classList.add("profiles")
        parent.appendChild(sectionContainer)

        const photographersInfo = info.photographers
        photographersInfo.map(photographerInfo =>{
            let photographer = PhotographerFactory.create(photographerInfo)
            return (
                MainFactory.createMainProfiles(photographer, sectionContainer)
            )
        })
    }

    //main title (h1) method
    static createMainTitlePage(parent)
    {
        const mainTitle = document.createElement("h1")
        mainTitle.classList.add("main-title")
        mainTitle.innerHTML = "Nos photographes"
        parent.prepend(mainTitle)
    }

    //method template profiles
    static createMainProfiles(photographer, parent)
    {
        const figure = document.createElement("figure")
        figure.classList.add("profile")
        figure.id = "profile-" + photographer.id
        parent.appendChild(figure)

        const profileFigcaption = document.createElement('figcaption')
        profileFigcaption.classList.add("info-profile")
        profileFigcaption.setAttribute("role", "text paragraph")

        MainFactory.createProfileAvatar(figure, photographer)
        MainFactory.createProfileCity(profileFigcaption, photographer)
        MainFactory.createProfileQuote(profileFigcaption, photographer)
        MainFactory.createProfilePrice(profileFigcaption, photographer)
        MainFactory.createProfileTags(profileFigcaption, photographer)

        figure.appendChild(profileFigcaption)
    }
    // title profile method
    static createProfileTitle(parent, photographer)
    {
        const profileTitle = document.createElement('h2')
        profileTitle.classList.add("name")
        profileTitle.innerHTML = photographer.name
        parent.appendChild(profileTitle)
    }
    // profile photo method
    static createProfileAvatar(figure, photographer)
    {
        const profileLink = document.createElement('a')
        profileLink.classList.add("img-profile-link")
        profileLink.setAttribute("data-portraitId", photographer.id)
        profileLink.setAttribute("role", "Link + image")
        profileLink.href = "#"
        figure.appendChild(profileLink)

        const profileImg = document.createElement('img')
        profileImg.src = photographer.portrait
        profileImg.alt = `photo profil de ${photographer.name}`
        profileImg.classList.add(`img-${photographer.id}`)

        profileLink.appendChild(profileImg)
        MainFactory.createProfileTitle(profileLink, photographer)

        MainFactory.createEventChangePage(profileLink)
    }
    // profile city method
    static createProfileCity(profileFigcaption, photographer)
    {
        const profileCity = document.createElement('p')
        profileCity.classList.add("city")
        profileCity.innerHTML = `${photographer.city} ` + `${photographer.country}`
        profileFigcaption.appendChild(profileCity)
    }

    //creating profiles tags in to the legend profiles
    static createProfileTags(profileFigcaption, photographer)
    {
        photographer.tags.map(tag =>{
            const profileSpan = document.createElement('span')

            profileSpan.classList.add(`tag`)
            profileSpan.innerHTML = "#" + tag

            profileFigcaption.appendChild(profileSpan)
        })
    }

    static createProfilePrice(profileFigcaption, photographer)
    {
        const profilePrice = document.createElement('p')
        profilePrice.classList.add("price")
        profilePrice.innerHTML = photographer.price + '€'
        profileFigcaption.appendChild(profilePrice)
    }

    static createProfileQuote(profileFigcaption, photographer)
    {
        const profileQuote = document.createElement('p')
        profileQuote.classList.add("quote")
        profileQuote.innerHTML = photographer.tagline
        profileFigcaption.appendChild(profileQuote)

    }

    // Access to profiles pages with clicking on profile link
    static createEventChangePage(profileLink)
    {
        const photographersInfo = info.photographers
        const getPhotographerById = (id) =>{
            return photographersInfo.find((photographer) =>{
                return photographer.id === Number(id)
            })
        }
        profileLink.addEventListener('click', (evt) =>{
            const id = evt.currentTarget.getAttribute("data-portraitId")
            ProfilPages.changePage(getPhotographerById(id))
      })
    }
}