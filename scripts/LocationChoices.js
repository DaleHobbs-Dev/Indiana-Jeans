// imported setter function from transientState module
import { setSocioLocationId } from "./transientState.js"

// Import the parseInteger function to safely convert string input to integer
import { parseInteger } from "../utils/parseHelpers.js"


// Event listener function to handle changes in the location radio buttons
export const handleLocationChoice = (changeEvent) => {
    console.log("Location changed:", changeEvent.target.value)

    // Only handle changes from the "location" radio buttons
    if (changeEvent.target.name === "location") {
        // Convert the string value to an integer
        const locationId = parseInteger(changeEvent.target.value)

        // Update the transient state with the parsed value
        setSocioLocationId(locationId)
    }
}

export const LocationChoices = async () => {
    // use await fetch to get the array of locations
    const response = await fetch("http://localhost:8088/socioLocations")

    // await the response and store it in a variable
    const locations = await response.json()

    let html = `
    <div class="survey-input" id="location-choice">
        <label for="location"><h2>What type of area do you live in?</h2></label>
    `

    html += locations.map(location => `<input type="radio" name="location" value="${location.id}"> ${location.label}`).join("")


    html += `
    </div>
    `

    return html
}