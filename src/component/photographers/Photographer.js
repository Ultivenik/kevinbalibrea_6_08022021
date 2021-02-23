import info from '../../../FishEyeDataFR.json'

export default class Photographer {
    constructor({
        photoPath = `/SamplePhotos/Photographers_ID_Photos/`,
        name,
        id,
        city,
        country,
        tags,
        tagline,
        price,
        portrait
    })
    {
        this.photoPath = photoPath
        this.name = name
        this.id = id
        this.city = city
        this.country = country
        this.tags = tags
        this.tagline = tagline
        this.price = price
        this.portrait = portrait
    }
}