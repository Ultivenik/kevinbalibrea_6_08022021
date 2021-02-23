import Assembly from "./MainPage"
import PhotographerFactory from "./photographers/PhotographerFactory"
import info from './../../FishEyeDataFR.json'

export default class ElementFactory{
    static create(option)
    {

        switch (option.type) {
            case 'header':
                return Assembly.DomElementContainer("header", "header")
                break
            case 'tagNav':
                return Assembly.DomElementContainer("nav", "navigationTag")
                break
            case 'tag':
                return Assembly.tagMap()
                break
            case 'logo':
                return Assembly.LinksDOM("logo-link" , "../index.html", null)
                break
            case 'imgLogo':
                return Assembly.ImageDOM(null, '../logo.png', 'logo du site FishEye')
                break
            case 'main':
                return Assembly.DomElementContainer("main", "main")
                break
            case 'section':
                return Assembly.DomElementContainer("section", "profiles")
                break
            case 'title':
                return Assembly.DomElementContent("h1", "main-title", "Nos photographes")
                break
            case 'profile':
                return Assembly.DomElementContainer("figure", "profile")
                break
            case 'linkProfile':
                return Assembly.LinksDOM("link-profile", "#", null)
                break
                case 'imgProfile':
                    return Assembly.ImageDOM(
                        `img-${PhotographerFactory.create(photographer.id)}`,
                        PhotographerFactory.create(photographer.portrait),
                        `photo de profil de ${PhotographerFactory.create(photographer.name)}`)
                break
            case 'nameProfile':
                return Assembly.DomElementContent("h2", "name", `${PhotographerFactory.create(photographer.name)}`)
                break
            case 'profileDetails':
                return Assembly.DomElementContainer("figcaption", "info-profile")
                break
            case "tagDetails":
                return Assembly.profilesLinkMap(PhotographerFactory.create(photographer.tags))
                break
            case 'city':
                return Assembly.DomElementContent("p", "city", `${PhotographerFactory.create(photographer.city)} + ${PhotographerFactory.create(photographer.country)}`)
                break
            case 'tagline':
                return Assembly.DomElementContent("p", "quote", PhotographerFactory.create(photographer.tagline))
                break
            case "price":
                return Assembly.DomElementContent("p", "price", PhotographerFactory.create(photographer.price))
                break
            default:
                break;
        }
    }
}