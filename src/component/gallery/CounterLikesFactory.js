export default class CounterLikesFactory
{
    static create(likes)
    {
        const likesParam = likes
        const spanLikes = document.createElement("span")
        spanLikes.classList.add("photo-likes")
        spanLikes.innerHTML = `${likesParam}  `

        const icon = document.createElement("i")
        icon.classList.add("fas", "fa-heart")
        icon.setAttribute("aria-label", "likes")

        spanLikes.appendChild(icon)

        spanLikes.addEventListener("click", () =>{
            spanLikes.innerText = likesParam + likesParam
            spanLikes.appendChild(icon)
        })
        return spanLikes
    }
}