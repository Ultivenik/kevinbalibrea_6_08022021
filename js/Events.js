import info from '../FishEyeDataFR.json'
import Categories from './Categories'

export default class Events {
    static filter(profile)
    {
        let photographersInfo = info.photographers
        let tagsInfo = new Categories()

        let tagsToLowerCase = tagsInfo.tags.map(item => {
            return item.toLowerCase()
        })

        photographersInfo.map(tag =>{
            if (!tag.tags.includes(tagsToLowerCase)) {
                profile.classList.toggle('hide')
            }
        })
    }
}