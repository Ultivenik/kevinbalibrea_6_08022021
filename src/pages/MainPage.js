import Header from '../component/infoMainPage/Header'
import Main from '../component/infoMainPage/Main'

export default class MainPage {
    static create()
    {
        Header.create()

        const main = document.createElement("main")
        main.classList.add("main")
        document.body.appendChild(main)

        Main.create(main)
    }
}