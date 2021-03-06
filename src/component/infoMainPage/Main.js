import ProfilPages from '../../pages/ProfilPages'
import info from '../../../FishEyeDataFR.json'
import ContainerProfilesFactory from './ContainerProfilesFactory'
import InfoFactory from './Infofactory'
import LegendProfilesFactory from './LegendProfilesFactory'
import LinkPageAvatarFactory from './LinkPageAvatarFactory'
import ProfileTags from './Profiletags'
import TitleFactory from './TitleFactory'
import AvatarFactory from './AvatarFactory'
import ContainerTagFactory from './ContainerTagFactory'

const photographersInfo = info.photographers
const path = "/kevinbalibrea_6_08022021/dist/SamplePhotos/Photographers_ID_Photos/"

export default class Main
{
    static create(parent)
    {
        const title = TitleFactory.create("h1" ,"Nos photographes", "main-title")
        const section = Main.createSectionProfiles()

        parent.appendChild(title)
        parent.appendChild(section)
    }

    // method template main landing page
    static createSectionProfiles()
    {
        const sectionContainer = document.createElement("section")
        sectionContainer.classList.add("profiles")

        photographersInfo.map(photographerInfo =>(
                Main.createMainProfiles(photographerInfo, sectionContainer)
            ))
        return sectionContainer
    }

    // method template profiles
    static createMainProfiles(photographer, parent)
    {
        const figure = ContainerProfilesFactory.create(photographer)
        const figcaption = LegendProfilesFactory.create()
        const title = TitleFactory.create("h2", photographer.name, "name")
        const avatar = LinkPageAvatarFactory.create(photographer, info.profile)
        Main.createEventChangePage(avatar)
        const imgAvatar = AvatarFactory.create("img-profile-link", photographer, path)
        const city = InfoFactory.create("city", "text", `${photographer.city} ${photographer.country}`)
        const quote = InfoFactory.create("quote", "text", photographer.tagline)
        const price = InfoFactory.create("price", "text", `${photographer.price} € / jour `)
        const containerTag = ContainerTagFactory.create()

        parent.appendChild(figure)
        figure.appendChild(avatar)
        figure.appendChild(figcaption)
        avatar.appendChild(imgAvatar)
        avatar.appendChild(title)
        figcaption.appendChild(city)
        figcaption.appendChild(quote)
        figcaption.appendChild(price)
        figcaption.appendChild(containerTag)
        ProfileTags.create(containerTag, photographer)
    }

    // Access to profiles pages with clicking on profile link
    static createEventChangePage(profileLink)
    {
        const getPhotographerById = (id) =>photographersInfo.find((photographer) =>photographer.id === Number(id))
        profileLink.addEventListener('click', (evt) =>{
            const id = evt.currentTarget.getAttribute("data-portraitId")
            ProfilPages.changePage(getPhotographerById(id))
      })
    }
}