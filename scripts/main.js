// import HTML components
import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./SubmissionButton.js"
import { SubmissionList } from "./SubmissionList.js"

// select the DOM element where the components will be rendered
const container = document.querySelector("#container")

// render function to display the components in the container
const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    const buttonHTML = SubmissionButton()
    const submissionsHTML = await SubmissionList()

    // Set the innerHTML of the container to include all components
    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionsHTML}
    `

    // ✅ Register the event listeners after the DOM is ready
    import("./eventHub.js")
}

// whenever the newSubmissionCreated event is dispatched, re-run the render() function
document.addEventListener("newSubmissionCreated", render)

render()