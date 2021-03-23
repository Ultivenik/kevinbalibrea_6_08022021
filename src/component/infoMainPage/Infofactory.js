export default  class InfoFactory
{
    static create(nameClass, role, content)
    {
        const profileInfo = document.createElement('p')
        profileInfo.classList.add(nameClass)
        profileInfo.setAttribute("role", role)
        profileInfo.innerHTML = content

        return profileInfo
    }
}