export default class CounterLikesFactory
{
    static create(type, classAdd, likes)
    {
        let likesParam = likes
        const spanLikes = document.createElement(type)
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