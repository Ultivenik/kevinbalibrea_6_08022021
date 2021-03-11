export default class LinkPageAvatarFactory
{
    static create(photographer)
    {
        const profileLink = document.createElement('a')
        profileLink.classList.add("img-profile-link")
        profileLink.setAttribute("data-portraitId", photographer.id)
        profileLink.setAttribute("role", "Link + image")
        profileLink.href = "#"
        return profileLink
    }
}