import MainPage from "./pages/MainPage"
import info from './../FishEyeDataFR.json'

class App{
   static create()
   {
      //Main page initialisation
      MainPage.create()
   }
}
// Document initialisation
document.addEventListener("DOMContentLoaded", App.create)