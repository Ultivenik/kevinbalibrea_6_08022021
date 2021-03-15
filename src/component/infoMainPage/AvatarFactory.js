export default class AvatarFactory
{
    static create(nameClass, photographer, path)
    {
        const IDImg = document.createElement("img")
        IDImg.classList.add(nameClass, `img-${photographer.id}`)
        IDImg.src = path + photographer.portrait
        IDImg.alt = `photo profil de ${photographer.name}`

        return IDImg
    }
}