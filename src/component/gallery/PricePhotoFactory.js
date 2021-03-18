export default class PricePhotoFactory
{
    static create(price)
    {
        const spanPrice = document.createElement("span")
        spanPrice.classList.add("price-photo")
        spanPrice.innerHTML = `${price}  €`
        spanPrice.tabIntex = 0
        return spanPrice
    }
}