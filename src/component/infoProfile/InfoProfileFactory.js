import AvatarFactory from "../infoMainPage/AvatarFactory"
import InfoFactory from "../infoMainPage/Infofactory"
import ProfileTags from "../infoMainPage/Profiletags"
import TitleFactory from "../infoMainPage/TitleFactory"
import ButtonFactory from "./ButtonFactory"
import FormFactory from "./FormFactory"

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
        const profileAvatar = AvatarFactory.create("img-profile-link", photographer, path)

        profileButton.addEventListener('click', () => {
            FormFactory.create(photographer)
        })

        profileButton.setAttribute("aria-label", "Contact Me")
        profileButton.setAttribute("role", "Buttons")
        infoProfile.appendChild(profileName)
        infoProfile.appendChild(profileLocation)
        infoProfile.appendChild(profileQuote)
        infoProfile.appendChild(profileButton)
        infoProfile.appendChild(profileAvatar)
        ProfileTags.create(infoProfile, photographer)

        return infoProfile
    }
}