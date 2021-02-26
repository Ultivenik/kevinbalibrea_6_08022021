import info from '../FishEyeDataFR.json'
import PhotographerFactory from './component/photographers/PhotographerFactory'
import MainPage from "./component/MainPage"
import ProfilPages from './component/ProfilPages'

//stocker les données des photographes du fichier JSON
const photographersInfo = info.photographers
const media = info.media
const getPhotographerById = (id) =>{
   return photographersInfo.find((photographer) =>{
      return photographer.id === Number(id)
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
   document.querySelectorAll(".profile .img-profile-link").forEach(profile =>{
      profile.addEventListener('click', (evt) =>{
         const id = evt.currentTarget.getAttribute("data-portraitId")
         ProfilPages.changePage(getPhotographerById(id))
      })
   })
}
// Evenemment d'initiation du document
document.addEventListener("DOMContentLoaded", init)