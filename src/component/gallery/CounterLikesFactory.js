export default class CounterLikesFactory
{
    static create(classAdd, likes)
    {
        let likesParam = likes
        const spanLikes = document.createElement("span")
        spanLikes.classList.add(classAdd)
        spanLikes.innerHTML = `${likesParam} `
        return spanLikes
    }
    static eventLikes(Likes,icon, likesParam)
    {
        Likes.addEventListener("click", () =>{
            Likes.textContent = `${likesParam += 1} `
            Likes.appendChild(icon)
        })
    }
}