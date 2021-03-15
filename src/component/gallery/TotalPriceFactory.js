export default class TotalPriceFactory
 {
     static create(price)
     {
        const totalPrice = document.createElement("span")
        totalPrice.classList.add("total-likes")
        price.map(total =>{
            totalPrice.innerHTML = `${total.price} € / jour`
        })
        return totalPrice
     }
 }