export default class PricePhotoFactory
{
    static create(price)
    {
        const spanPrice = document.createElement("span")
        spanPrice.classList.add("price-photo")
        spanPrice.innerHTML = price + "  €  "
        return spanPrice
    }
}