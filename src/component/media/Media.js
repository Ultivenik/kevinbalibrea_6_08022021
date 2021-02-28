
export default class Media {
    constructor({
        photoPath = `/SamplePhotos/`,
        id,
        photographerId,
        image,
        video,
        tags,
        likes,
        date,
        price,
    })
    {
        this.photoPath = photoPath
        this.id = id
        this.photographerId = photographerId
        this.image = image
        this.video = video
        this.tags = tags
        this.likes = likes
        this.date = date
        this.price = price
    }
}