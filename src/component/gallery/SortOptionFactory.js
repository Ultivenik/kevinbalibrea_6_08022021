export default class SortOptionFactory
{
    static create()
    {
        const optArray = ["Popularité", "Date", "Titre"]
        for (let i = 0; i < optArray.length; i++) {
            const optContent = array[i];
            const option = document.createElement("option")
            option.classList.add("occurency-list")
            option.value = optContent
            option.text = optContent
            return option
        }
    }
}