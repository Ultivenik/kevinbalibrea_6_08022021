export default class InfoProfileFactory
{
    static create(photographer)
    {
        let infoProfile = document.createElement('section')
        infoProfile.classList.add("profileID")

        InfoProfileFactory.createProfileName(infoProfile, photographer)
        InfoProfileFactory.createPhotographerLocation(infoProfile, photographer)
        InfoProfileFactory.createPhotographerQuote(infoProfile, photographer)
        InfoProfileFactory.createProfilesTags(infoProfile, photographer)
        InfoProfileFactory.createContactBtn(infoProfile ,"Contactez-moi")
        InfoProfileFactory.createAvatar(infoProfile, photographer)

        return infoProfile
    }

    static createProfileName(infoProfile, photographer)
    {
        let IDName = document.createElement("h2")
        IDName.classList.add("name")
        IDName.innerHTML = photographer.name
        infoProfile.appendChild(IDName)
    }

    static createPhotographerLocation(infoProfile, photographer)
    {
        let IDLocation = document.createElement("p")
        IDLocation.classList.add("city")
        IDLocation.innerHTML = `${photographer.city}` + `${photographer.country}`
        infoProfile.appendChild(IDLocation)
    }

    static createPhotographerQuote(infoProfile, photographer)
    {
        let IDTagline = document.createElement("p")
        IDTagline.classList.add("quote")
        IDTagline.innerHTML = photographer.tagline
        infoProfile.appendChild(IDTagline)
    }

    static createContactBtn(infoProfile, content)
    {
        let btnContact = document.createElement('button')
        btnContact.classList.add('btn-contact')
        btnContact.innerHTML = content
        infoProfile.appendChild(btnContact)
    }

    static createProfilesTags(infoProfile, photographer)
    {
        photographer.tags.map(tag =>{
            let profileSpan = document.createElement('span')
            let profileSpanLink = document.createElement('a')
            profileSpanLink.href = "#"
            profileSpan.appendChild(profileSpanLink)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.classList.add(`tag`)
            infoProfile.appendChild(profileSpan)
        })
    }

    static createAvatar(infoProfile, photographer)
    {
        let IDImg = document.createElement('img')
        IDImg.classList.add("img-profile-link")
        IDImg.src ="./../SamplePhotos/Photographers_ID_Photos/" + photographer.portrait
        IDImg.alt = `photo profil de ${photographer.name}`
        infoProfile.appendChild(IDImg)
    }
    static createContactForm()
    {
        
    }
}