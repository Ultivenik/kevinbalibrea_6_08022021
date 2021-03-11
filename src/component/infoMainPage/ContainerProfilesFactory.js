export default class ContainerProfilesFactory
{
    static create(photographer)
    {
        const figure = document.createElement("figure")
        figure.classList.add("profile")
        figure.id = "profile-" + photographer.id

        return figure
    }
}