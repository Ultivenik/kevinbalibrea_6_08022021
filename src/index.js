import info from '../FishEyeDataFR.json'
import PhotographerFactory from './component/photographers/PhotographerFactory'
import MainPage from "./component/MainPage";
import ElementFactory from './component/ElementFactory'

//stocker les données des photographes du fichier JSON
const photographersInfo = info.photographers
const media = info.media

function name(params) {
   let photographersID = photographersInfo.map(photographerInfo =>{
      console.log(photographerInfo)
      let photographer = PhotographerFactory.create(photographerInfo)
      return (
         MainPage.DOMConstructProfilesSection(photographer)
      )
   })

      photographersID.map(ID =>{
      main.appendChild(ID)
   })
}

function init() {
   //creation du DOM header
   MainPage.DOMConstructHeader()
   //Création d'instances de classes et ajout dans le DOM
   let photographersProfile = photographersInfo.map(photographerInfo =>{
      let photographer = PhotographerFactory.create(photographerInfo)
      return (
         MainPage.DOMConstructMainProfiles(photographer)
      )
   })

   //Construction du container et envoi des enfant dans le parent
   let main = MainPage.DOMConstructMain()
   photographersProfile.map(profile =>{
      main.appendChild(profile)
   })

   document.querySelectorAll("nav > .tag > a").forEach(tag => {
      tag.addEventListener('click', MainPage.sortingProfile)
   })
}
// Evenemment d'initiation du document
document.addEventListener("DOMContentLoaded", init)