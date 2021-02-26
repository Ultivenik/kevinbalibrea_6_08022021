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

}