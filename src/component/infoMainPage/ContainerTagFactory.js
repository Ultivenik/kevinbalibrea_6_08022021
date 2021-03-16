export default class ContainerTagFactory
{
    static create()
    {
        const containerTag = document.createElement("div")
        containerTag.classList.add("container-tag")
        containerTag.setAttribute("aria-label", "Tag")
        containerTag.setAttribute("role", "Links")
        return containerTag
    }
}