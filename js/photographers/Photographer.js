export default class Photographer {
    photoPath = `/SamplePhotos/Photographers_ID_Photos/`
    name
    id
    city
    country
    tags
    tagline
    price
    portrait

    get photoPath()
    {
        return this.photoPath
    }

    get name()
    {
        return this.name
    }

    set name(name)
    {
        this.name = name
    }

    get id()
    {
        return this.id
    }

    set id(id)
    {
        this.id = id
    }

    get city()
    {
        return this.city
    }

    set city(city)
    {
        this.city = city
    }

    get country()
    {
        return this.country
    }

    set country(country)
    {
        this.country = country
    }

    get tags()
    {
        return this.tags
    }

    set tags(tags)
    {
        this.tags = tags
    }

    get tagline()
    {
        return this.tagline
    }

    set tagline(tagline)
    {
        this.tagline = tagline
    }

    get Price()
    {
        return this.price
    }

    set Price(price)
    {
        this.price = price
    }

    get portrait()
    {
        return this.portrait
    }

    set portrait(portrait)
    {
        this.portrait = portrait
    }
}