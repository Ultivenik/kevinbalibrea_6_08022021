import HeaderFactory from './../component/infoMainPage/HeaderFactory'
import MainFactory from './../component/infoMainPage/MainFactory'

export default class MainPage {
    static create()
    {
        MainPage.displayHeaderFactory()
        MainPage.displayMainFactory()
    }

    static displayHeaderFactory()
    {
        HeaderFactory.create()
    }

    static displayMainFactory()
    {
        const main = document.createElement("main")
        main.classList.add("main")
        document.body.appendChild(main)

        MainFactory.create(main)
    }
}