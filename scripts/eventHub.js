import { handleOwnershipChange, handleJeanTypeChoice } from "./JeanChoices.js"
import { handleLocationChoice } from "./LocationChoices.js"
import { handleSurveySubmission } from "./SubmissionButton.js"
import { handlePurchaseYearChoice } from "./PurchaseYear.js"

// Centralized event listener for change events

document.addEventListener("change", (event) => {
    if (event.target.name === "ownsJeans") {
        handleOwnershipChange(event)
    }
    if (event.target.name === "location") {
        handleLocationChoice(event)
    }
    if (event.target.name === "jeanType") {
        handleJeanTypeChoice(event)
    }
    if (event.target.name === "purchaseYear") {
        handlePurchaseYearChoice(event)
    }
})

document.addEventListener("click", (event) => {
    if (event.target.id === "submission-button") {
        handleSurveySubmission(event)
    }
})