import { handleOwnershipChange } from "./JeanChoices.js"
import { handleLocationChoice } from "./LocationChoices.js"
import { handleSurveySubmission } from "./SubmissionButton.js"

// Centralized event listener for change events

document.addEventListener("change", (event) => {
    if (event.target.name === "ownsJeans") {
        handleOwnershipChange(event)
    }
    if (event.target.name === "location") {
        handleLocationChoice(event)
    }
})

document.addEventListener("click", (event) => {
    if (event.target.id === "submission-button") {
        handleSurveySubmission(event)
    }
})