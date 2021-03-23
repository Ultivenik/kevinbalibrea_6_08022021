import AvatarFactory from "../infoMainPage/AvatarFactory"
import ContainerTagFactory from "../infoMainPage/ContainerTagFactory"
import InfoFactory from "../infoMainPage/Infofactory"
import ProfileTags from "../infoMainPage/Profiletags"
import TitleFactory from "../infoMainPage/TitleFactory"
import ButtonFactory from "./ButtonFactory"
import FormFactory from "./FormFactory"

// const path = "/kevinbalibrea_6_08022021/dist/SamplePhotos/Photographers_ID_Photos/"
const path = "/dist/SamplePhotos/Photographers_ID_Photos/"

export default class InfoProfileFactory
{
    static create(photographer)
    {
        return InfoProfileFactory.createProfileDetail(photographer)
    }

    static createProfileDetail(photographer)
    {
        const infoProfile = document.createElement("section")
        infoProfile.classList.add("profileID")

        const profileName = TitleFactory.create("h1", photographer.name, "name")
        profileName.setAttribute("role", "header")
        const profileLocation = InfoFactory.create("city", "text", `${photographer.city} ${photographer.country}`)
        const profileQuote = InfoFactory.create("quote", "text", photographer.tagline)
        const profileButton = ButtonFactory.create("btn-contact", "Contactez-moi")
        profileButton.tabIndex = 0
        const profileAvatar = AvatarFactory.create("img-profile-link", photographer, path)
        const containerTags = ContainerTagFactory.create()

        profileButton.addEventListener('click', () => {
            FormFactory.create(photographer)
            document.querySelector("#firstname").focus()
        })

        profileButton.setAttribute("aria-label", "Contact Me")
        profileButton.setAttribute("role", "Buttons")
        infoProfile.appendChild(profileName)
        infoProfile.appendChild(profileLocation)
        infoProfile.appendChild(profileQuote)
        infoProfile.appendChild(profileButton)
        infoProfile.appendChild(profileAvatar)
        infoProfile.appendChild(containerTags)
        ProfileTags.create(containerTags, photographer)

        return infoProfile
    }
}