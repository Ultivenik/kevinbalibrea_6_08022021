export default class InfoProfileFactory
{
    static create(photographer)
    {
        let infoProfile = document.createElement("section")
        infoProfile.classList.add("profileID")

        InfoProfileFactory.createProfileName(infoProfile, photographer)
        InfoProfileFactory.createPhotographerLocation(infoProfile, photographer)
        InfoProfileFactory.createPhotographerQuote(infoProfile, photographer)
        InfoProfileFactory.createProfilesTags(infoProfile, photographer)
        InfoProfileFactory.createContactBtn(infoProfile , photographer, "Contactez-moi" )
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

    static createContactBtn(infoProfile, photographer, content)
    {
        let btnContact = document.createElement("button")
        btnContact.classList.add("btn-contact")
        btnContact.innerHTML = content
        infoProfile.appendChild(btnContact)
        btnContact.addEventListener("click", () =>{
            InfoProfileFactory.createContactForm(photographer)
        })
    }

    static createProfilesTags(infoProfile, photographer)
    {
        photographer.tags.map(tag =>{
            let profileSpan = document.createElement("span")
            let profileSpanLink = document.createElement("a")
            profileSpanLink.href = "#"
            profileSpan.appendChild(profileSpanLink)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.classList.add(`tag`)
            infoProfile.appendChild(profileSpan)
        })
    }

    static createAvatar(infoProfile, photographer)
    {
        let IDImg = document.createElement("img")
        IDImg.classList.add("img-profile-link")
        IDImg.src ="./../SamplePhotos/Photographers_ID_Photos/" + photographer.portrait
        IDImg.alt = `photo profil de ${photographer.name}`
        infoProfile.appendChild(IDImg)
    }
    static createContactForm(photographer)
    {
        let overlay = document.createElement("section")
        overlay.classList.add("overlay-contact")
        document.querySelector(".main").appendChild(overlay)

        let form = document.createElement("form")
        form.classList.add("contact-form")
        overlay.appendChild(form)

        InfoProfileFactory.createTitleForm(photographer, form)
        InfoProfileFactory.createCloseButton(overlay, form)
        InfoProfileFactory.createLabel("Prenom", form)
        InfoProfileFactory.createInput("text", "firstname", form)
        InfoProfileFactory.createLabel("Nom", form)
        InfoProfileFactory.createInput("text", "lastname", form)
        InfoProfileFactory.createLabel("Email", form,)
        InfoProfileFactory.createInput("email", "email", form)
        InfoProfileFactory.createLabel("Votre message", form)
        InfoProfileFactory.createTextArea("text", form)
        InfoProfileFactory.createBtnForm("Envoyer", form)
    }

    static createTitleForm(photographer, parent)
    {
        let title = document.createElement("h2")
        title.classList.add("title-form")
        title.innerHTML = "Contactez moi " + photographer.name
        parent.appendChild(title)
    }

    static createCloseButton(overlay, parent)
    {
        let close = document.createElement("i")
        close.classList.add("fas", "fa-times")
        close.addEventListener("click", () =>{
            overlay.remove()
        })
        parent.appendChild(close)
    }

    static createLabel(content, parent)
    {
        let Label = document.createElement("label")
        Label.classList.add("label-form")
        Label.innerHTML = content
        parent.appendChild(Label)
    }

    static createInput(type, id, parent)
    {
        let input = document.createElement("input")
        input.type = type
        input.classList.add("input-form")
        input.id = id
        parent.appendChild(input)
    }

    static createTextArea(id, parent)
    {
        let textInput = document.createElement("textarea")
        textInput.classList.add("input-form")
        textInput.id = id
        parent.appendChild(textInput)
    }

    static createBtnForm(content, parent)
    {
        let btnForm = document.createElement("button")
        btnForm.classList.add("btn-contact")
        btnForm.innerHTML = content
        btnForm.addEventListener("click", (e) =>{
            let firstNameInput = document.getElementById("firstname")
            let lastNameInput = document.getElementById("lastname")
            let emailInput = document.getElementById("email")
            let textInput = document.getElementById("text")
            InfoProfileFactory.retrieveFormValues(e, firstNameInput, lastNameInput, emailInput, textInput)
        })
        parent.appendChild(btnForm)
    }
    static retrieveFormValues(e, firstNameInput, lastNameInput, emailInput, textInput)
    {
        e.preventDefault
        console.log(
            "Nom de l'utilisateur: " + firstNameInput.value + "\n" +
            "Prénom de l'utilisateur: " + lastNameInput.value + "\n" +
            "E-mail de l'utilisateur: " + emailInput.value + "\n" +
            "Message de l'utilisateur: " + textInput.value
        );
    }
}