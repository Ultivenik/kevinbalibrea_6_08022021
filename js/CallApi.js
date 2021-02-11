import "core-js/stable";
import "regenerator-runtime/runtime";
import info from '../FishEyeDataFR.json'
import Header from './Header'

let classText = {
    city: "city",
    quote: "quote",
    price: "price"
}


const CallApi = () => {
    let photographers = info.photographers

    return photographers.map(item =>{
        let figure = document.createElement("figure")
        let profileLink = document.createElement('a')
        let profileImg = document.createElement('img')
        let profileTitle = document.createElement('h2')
        let profileFigcaption = document.createElement('figcaption')
        let profiltCity = document.createElement('p')
        let profileQuote = document.createElement('p')
        let profilePrice = document.createElement('p')


        figure.classList.add("profile")
        profileLink.classList.add("img-profile-link")
        profileTitle.classList.add("name")
        profileFigcaption.classList.add("info-profile")
        profiltCity.classList.add("city")
        profileQuote.classList.add("quote")
        profilePrice.classList.add("price")

        profileLink.href = "#"
        profileImg.src = item.portrait
        profileTitle.innerHTML = item.name
        profiltCity.innerHTML = `${item.city} ` + `${item.country}`
        profileQuote.innerHTML = item.tagline
        profilePrice.innerHTML = item.price + '€'

        document.body.appendChild(figure)
        figure.appendChild(profileLink)
        profileLink.appendChild(profileImg)
        figure.appendChild(profileTitle)
        figure.appendChild(profileFigcaption)
        profileFigcaption.appendChild(profiltCity)
        profileFigcaption.appendChild(profileQuote)
        profileFigcaption.appendChild(profilePrice)

        item.tags.map(tag =>{
            let profileSpan = document.createElement('span')
            let profileSpanLink = document.createElement('a')

            profileSpanLink.href = "#"
            profileSpan.classList.add(`tag`)
            profileSpanLink.innerHTML ="#" + tag
            profileSpan.appendChild(profileSpanLink)
            profileFigcaption.appendChild(profileSpan)
        })
    })
}
export default CallApi