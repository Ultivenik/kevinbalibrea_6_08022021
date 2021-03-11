export default class CounterLikesFactory
{
    static create(likes)
    {
        const spanLikes = document.createElement("span")
        spanLikes.classList.add("photo-likes")
        spanLikes.innerHTML = `${likes  }  `

        const icon = document.createElement("i")
        icon.classList.add("fas", "fa-heart")
        icon.setAttribute("aria-label", "likes")

        spanLikes.appendChild(icon)

        spanLikes.addEventListener("click", () =>{
            spanLikes.innerText = likes++
            spanLikes.appendChild(icon)
        })
        return spanLikes
    }
}