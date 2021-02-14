import info from '../FishEyeDataFR.json'
import PhotographerFactory from '../js/photographers/PhotographerFactory'
import Assembly from "../js/Assembly.js";
import Events from '../js/Events'

function init() {
   //stocker les données des photographes du fichier JSON
   let photographersInfo = info.photographers
   //creation du DOM header
   Assembly.header()
   //Création d'instances de classes et ajout dans le DOM
   let photographersProfile = photographersInfo.map(photographerInfo =>{
      let photographer = PhotographerFactory.create(photographerInfo)
      return Assembly.DOMConstruct(photographer)
   })
   //Construction du container et envoi des enfant dans le parent
   let main = Assembly.DOMConstructMain()
   photographersProfile.map(profile =>{
      main.appendChild(profile)
   })

   let tagNav = document.querySelectorAll('.tag')
   let profiles = document.querySelectorAll('.profile')

   tagNav.forEach(item=>{
      profiles.forEach(o =>{
         item.addEventListener('click', Events.filter(o))
      })
   })


   let media = info.media
}
// Evenemment d'initiation du document
document.addEventListener("DOMContentLoaded", init)