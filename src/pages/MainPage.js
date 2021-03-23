import Header from '../component/infoMainPage/Header'
import Main from '../component/infoMainPage/Main'

export default class MainPage {
    // creating main page
    static create()
    {
        const main = document.createElement("main")
        main.classList.add("main")
        document.body.appendChild(main)

        Header.create()
        Main.create(main)
    }
}