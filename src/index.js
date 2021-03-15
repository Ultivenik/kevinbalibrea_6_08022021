import MainPage from "./pages/MainPage"
import './style.css'

class App{
   static create()
   {
      // Main page initialisation
      MainPage.create()
   }
}
// Document initialisation
document.addEventListener("DOMContentLoaded", App.create)