import CounterLikesFactory from "./CounterLikesFactory"
import IconFactory from "./IconFactory"

export default class TotalLikesFactory
 {
     // return the result of the sum of all likes of a profile
     static create(media)
     {
        let sum = []
        media.map(total =>{
            sum.push(total.likes)
        })
        const totalLikes = CounterLikesFactory.create("span", "total-likes", sum.reduce((a, b) => a + b))
        const icon = IconFactory.create("fa-heart", "label", "likes")
        totalLikes.appendChild(icon)
        return totalLikes
     }
 }