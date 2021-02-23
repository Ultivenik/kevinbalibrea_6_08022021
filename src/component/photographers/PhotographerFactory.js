import Photographer from "./Photographer";
import ElementFactory from '../ElementFactory'


export default class PhotographerFactory{
    static create(photographerInfo)
    {
        let photographer = new Photographer(photographerInfo)
        photographer.name = photographerInfo.name
        photographer.id = photographerInfo.id
        photographer.city = photographerInfo.city
        photographer.country = photographerInfo.country
        photographer.tags = photographerInfo.tags
        photographer.tagline = photographerInfo.tagline
        photographer.price = photographerInfo.price
        photographer.portrait = photographer.photoPath + photographerInfo.portrait

        return photographer
    }

    // static PhotographerDOMConstruct()
    // {
    //     const photographers = info.photographers

    //     const header = ElementFactory.create({type: 'header'})
    //     document.body.appendChild(header)

    //     const logo = ElementFactory.create({type: "logo"})
    //     document.querySelector('.header').prepend(logo)

    //     const imgLogo = ElementFactory.create({type: "imgLogo"})
    //     document.querySelector('.logo-link').appendChild(imgLogo)

    //     const nav = ElementFactory.create({type: 'tagNav'})
    //     document.querySelector(".header").appendChild(nav)

    //     const tag = ElementFactory.create({type: 'tag'})
    //     tag.map(tag =>{
    //         document.querySelector(".navigationTag").appendChild(tag)
    //     })

    //     const main = ElementFactory.create({type: 'main'})
    //     document.body.appendChild(main)

    //     const mainTitle = ElementFactory.create({type: 'title'})
    //     document.querySelector('.main').prepend(mainTitle)

    //     const sectionProfile = ElementFactory.create({type: 'section'})
    //     document.querySelector('.main').appendChild(sectionProfile)


    //     const profile = ElementFactory.create({type: 'profile'})
    //     document.querySelector('.profiles').appendChild(profile)

    //     const linkProfile = ElementFactory.create({type: 'linkProfile'})
    //     document.querySelector('.profile').appendChild(linkProfile)

    //     const imgProfile = ElementFactory.create({type: 'imgProfile'})
    //     document.querySelector('.link-profile').appendChild(imgProfile)
    // }
}