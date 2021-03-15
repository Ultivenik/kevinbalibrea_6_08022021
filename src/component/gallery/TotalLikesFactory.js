import CounterLikesFactory from "./CounterLikesFactory"
import IconFactory from "./IconFactory"

export default class TotalLikesFactory
 {
     static create(media)
     {
        let sum = []
        media.map(total =>{
            sum.push(total.likes)
        })
        const totalLikes = CounterLikesFactory.create("total-likes", sum.reduce((a, b) => a+ b))
        const icon = IconFactory.create()
        totalLikes.appendChild(icon)
        return totalLikes
     }
 }