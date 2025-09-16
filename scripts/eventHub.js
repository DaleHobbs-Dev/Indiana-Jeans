import { handleOwnershipChange } from "./JeanChoices.js"
import { handleLocationChoice } from "./LocationChoices.js"

// Centralized event listener for change events

document.addEventListener("change", (event) => {
    if (event.target.name === "ownsJeans") {
        handleOwnershipChange(event)
    }
    if (event.target.name === "location") {
        handleLocationChoice(event)
    }
})