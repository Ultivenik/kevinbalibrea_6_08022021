export default class ProfileTags
{
    static create(parent, photographer)
    {
        photographer.tags.map(tag =>{
            const profileSpan = document.createElement('span')
            profileSpan.setAttribute("role", "Links")
            profileSpan.setAttribute("aria-label", "Tag")
            profileSpan.classList.add(`tag`)
            profileSpan.innerHTML = `#${tag}`

            parent.appendChild(profileSpan)
            return profileSpan
        })
    }
}