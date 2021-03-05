import info from './../../../FishEyeDataFR.json'

export default class TagFactory
{
    static create({
        parent,
        onClick = TagFactory.sortProfile,
        tag
    })
    {
        const spanNav = document.createElement("span")
        const linkNav = document.createElement("a")
        spanNav.classList.add("tag")
        spanNav.setAttribute("role", "Links")

        linkNav.href = "#"
        linkNav.setAttribute("aria-label", "Tag")

        parent.appendChild(spanNav)
        spanNav.appendChild(linkNav)

        linkNav.innerHTML = "#" + tag
        linkNav.addEventListener('click', onClick)
        return spanNav
    }

    //sorting profiles with hashtags
    static sortProfile(e)
    {
        let tag = e.target.innerHTML
        tag = tag.toLowerCase().substring(1, tag.length)
        let photographers = info.photographers.map(item=> {return item})
        let idArray = []
        // if the tag on navbar is the same of profile tag the profile stay displayed
        photographers.map( photographer => {
            let photographerProfile = document.querySelector(`#profile-${photographer.id}`)
            if (photographer.tags.includes(tag) === false) {
                idArray.push(photographer.id)
            }
            photographerProfile.style.removeProperty("display")
        })
        // if the profile haven't the clicked tag, it's deleted
        idArray.forEach(id => {
            let photographerCard = document.querySelector(`#profile-${id}`)
            photographerCard.style.display = "none"
        })
        // make appear profile by clicking tag again
        e.target.addEventListener("click", () =>{
            idArray.forEach(id => {
                let photographerCard = document.querySelector(`#profile-${id}`)
                if (photographerCard.style.display === "none") {
                    photographerCard.style.display = "block"
                }else{
                    photographerCard.style.display = "none"
                }
            })
        })
        
    }
}