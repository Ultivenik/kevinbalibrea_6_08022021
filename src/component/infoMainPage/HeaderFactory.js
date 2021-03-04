import info from './../../../FishEyeDataFR.json'

export default class HeaderFactory
{
    static create(){
        HeaderFactory.createHeader()
    }
    //tags reference
    static tags = [
        "Portrait",
        "Art",
        "Fashion",
        "Architecture",
        "Travel",
        "Sport",
        "Animals",
        "Events",
    ]

    // create header method
    static createHeader()
    {
        const logoLink = document.createElement('a')
        const logoImg = document.createElement('img')
        const header = document.createElement("header")
        const headerNav = document.createElement("nav")

        logoLink.href = "index.html"
        logoImg.src = "./logo.png"
        logoImg.alt = "Fisheye Home page"

        header.classList.add("header")

        document.body.prepend(header)
        logoLink.appendChild(logoImg)
        header.appendChild(logoLink)
        header.appendChild(headerNav)

        HeaderFactory.createTags(headerNav)
    }

    //creating tags method
    static createTags(headerNav)
    {
        HeaderFactory.tags.map(tag =>{
            const spanNav = document.createElement("span")
            const linkNav = document.createElement("a")

            linkNav.href = "#"
            spanNav.classList.add("tag")

            headerNav.appendChild(spanNav)
            spanNav.appendChild(linkNav)

            linkNav.innerHTML = "#" + tag
            linkNav.addEventListener('click', HeaderFactory.sortingProfile)
        })
    }

    //sotring profiles with hashtags
    static sortingProfile(e)
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