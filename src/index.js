import info from '../FishEyeDataFR.json'
import PhotographerFactory from '../js/photographers/PhotographerFactory'
import Assembly from "../js/Assembly.js";
import Events from '../js/Events'

function init() {
   //stocker les données des photographes du fichier JSON
   let photographersInfo = info.photographers
   //creation du DOM header
   Assembly.DOMConstructHeader()
   //Création d'instances de classes et ajout dans le DOM
   let photographersProfile = photographersInfo.map(photographerInfo =>{
      let photographer = PhotographerFactory.create(photographerInfo)
      return (
         Assembly.DOMConstructMainProfiles(photographer)
      )
   })

   let photographersID = photographersInfo.map(photographerInfo =>{
      console.log(photographerInfo)
      let photographer = PhotographerFactory.create(photographerInfo)
      return (
         Assembly.DOMConstructProfilesSection(photographer)
      )
   })
   //Construction du container et envoi des enfant dans le parent
   let main = Assembly.DOMConstructMain()
   photographersProfile.map(profile =>{
      main.appendChild(profile)
   })
   photographersID.map(ID =>{
      main.appendChild(ID)
   })
   // let tagsNav = document.querySelectorAll('.tag')
   // let profiles = document.querySelectorAll('.profile')

   // tagsNav.forEach(tagNav =>{
   //    tagNav.addEventListener('click', () => {
   //       profiles.forEach(profile =>{
   //          Events.filter(profile)
   //       })
   //    })
   // })

   let media = info.media
}
// Evenemment d'initiation du document
document.addEventListener("DOMContentLoaded", init)