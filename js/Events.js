import info from '../FishEyeDataFR.json'
import Categories from './Categories'

export default class Events {
    static filter(/*DOMTag,*/ profile)
    {
        let photographersInfo = info.photographers
        let tagsToLowerCase = Categories.tags.map(item => {
            return item.toLowerCase()
        })
        let arr = []

        // DOMTag.addEventListener('click', () => {
            photographersInfo.map(tag =>{
                arr.push(tag.tags)
                arr.flat()

                console.log(arr);

                if (!tagsToLowerCase.includes(tag.tags)) {
                    profile.classList.toggle('hide')
                }
            })
        // })
    }
}