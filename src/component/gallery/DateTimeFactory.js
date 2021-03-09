export default class DatetimeFactory
{
    static create(date)
    {
        const dateTime = document.createElement("time")
        dateTime.classList.add("date-time")
        dateTime.setAttribute("datetime", date)
        dateTime.innerHTML = date
        return dateTime
    }
}