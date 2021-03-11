export default class LegendProfilesFactory
{
    static create()
    {
        const profileFigcaption = document.createElement('figcaption')
        profileFigcaption.classList.add("info-profile")
        profileFigcaption.setAttribute("role", "text paragraph")

        return profileFigcaption
    }
}