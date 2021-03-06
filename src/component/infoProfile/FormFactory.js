import LabelFactory from "./LabelFactory"
import TitleFactory from "../infoMainPage/TitleFactory"
import ButtonFactory from "./ButtonFactory"
import InputFactory from "./InputFactory"
import OverlayFactory from "./OverlayFactory"
import TextAreaFactory from "./TextAreaFactory"
import Form from "./Form"

export default class FormFactory
{
    static create(photographer)
    {
        return FormFactory.createFormDetails(photographer)
    }

    static createFormDetails(photographer)
    {
        const overlay = OverlayFactory.create()
        const form = Form.create("contact-form")
        const titleForm = TitleFactory.create("h2", `Contactez moi ${photographer.name}`,"title-form")
        const closeBtn = ButtonFactory.create("btn-close", "<i class='fas fa-times'></i>")
        const firstName = LabelFactory.create("label-form", "Prenom", "firstname")
        const firstNameInput = InputFactory.create("text", "firstname")
        const lastName = LabelFactory.create("label-form", "Nom", "lastname")
        const lastNameInput = InputFactory.create("text", "lastname")
        const mail = LabelFactory.create("label-form", "Email", "email")
        const emailInput = InputFactory.create("email", "email")
        const message = LabelFactory.create("label-form", "Votre message", "text")
        const messageInput = TextAreaFactory.create("text")
        const sendingBtn = ButtonFactory.create("btn-contact", "Envoyer")

        const keyClose = (e) =>{
            if (e.key === "Escape") {
                overlay.remove()
            }
        }
        const closeOverlay = (e) =>{
            e.preventDefault()
            overlay.remove()
        }

        // display the values of the form in the console
        const sendingMessage = (e) =>{
            e.preventDefault()
            const contactForm = document.querySelector(".contact-form")
            const first = document.getElementById("firstname")
            const last = document.getElementById("lastname")
            const email = document.getElementById("email")
            const text = document.getElementById("text")
            // eslint-disable-next-line
            console.log(
                `Nom de l'utilisateur: ${  first.value  }\n`
                + `Prénom de l'utilisateur: ${  last.value  }\n`
                + `E-mail de l'utilisateur: ${  email.value  }\n`
                + `Message de l'utilisateur: ${  text.value}`
            )
            contactForm.reset()
        }
        sendingBtn.addEventListener("click", sendingMessage)
        closeBtn.addEventListener("click", closeOverlay)
        window.addEventListener("keydown", keyClose)

        overlay.appendChild(form)
        form.appendChild(titleForm)
        form.appendChild(closeBtn)
        form.appendChild(firstName)
        form.appendChild(firstNameInput)
        form.appendChild(lastName)
        form.appendChild(lastNameInput)
        form.appendChild(mail)
        form.appendChild(emailInput)
        form.appendChild(message)
        form.appendChild(messageInput)
        form.appendChild(sendingBtn)

        return overlay
    }
}