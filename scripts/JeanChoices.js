// imported setter function from transientState module
import { setOwnsBlueJeans } from "./transientState.js"

// Import the parseBoolean function to safely convert string input to boolean or null
import { parseBoolean } from "../utils/parseHelpers.js"

// Event listener function to handle changes in the ownership radio buttons
export const handleOwnershipChange = (changeEvent) => {
  console.log("Ownership changed:", changeEvent.target.value)

  // Get the name attribute of the element that triggered the event
  const stringName = changeEvent.target.name

  // Only handle changes from the "ownsJeans" radio buttons
  if (stringName === "ownsJeans") {
    // Convert the string value ("true", "false", "unsure") to a boolean or null
    const safeBooleanValue = parseBoolean(changeEvent.target.value)

    // Update the transient state with the parsed value
    setOwnsBlueJeans(safeBooleanValue)
  }
}

export const JeanChoices = () => {

  let html = `
    <div class="survey-input">
        <label for="ownsJeans"><h2>Do you own a pair of jeans?</h2></label>
      <input type="radio" name="ownsJeans" value="true"> Yes
      <input type="radio" name="ownsJeans" value="false"> No
      <input type="radio" name="ownsJeans" value="unsure" checked> Unsure
    </div>`

  return html
}