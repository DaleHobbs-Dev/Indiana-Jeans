// imported setter function from transientState module
import { setOwnsBlueJeans, setJeanType } from "./transientState.js"

// Import the parseBoolean function to safely convert string input to boolean or null
import { parseBoolean } from "../utils/parseHelpers.js"

// Event listener function to handle changes in the ownership radio buttons
export const handleOwnershipChange = (changeEvent) => {
  console.log("Ownership changed:", changeEvent.target.value)
  // Convert the string value ("true", "false", "unsure") to a boolean or null
  const safeBooleanValue = parseBoolean(changeEvent.target.value)
  // Update the transient state with the parsed value
  setOwnsBlueJeans(safeBooleanValue)

  const jeanTypeSection = document.getElementById("jean-type-choice")
  const purchaseYearSection = document.getElementById("purchase-year-choice")
  // Show or hide the jean type and purchase year sections based on ownership
  if (safeBooleanValue === true) {
    jeanTypeSection.classList.remove("hidden")
    purchaseYearSection.classList.remove("hidden")
  } else {
    jeanTypeSection.classList.add("hidden")
    purchaseYearSection.classList.add("hidden")
  }
}

export const handleJeanTypeChoice = (changeEvent) => {
  console.log("Jean type changed:", changeEvent.target.value)
  // Convert the string value to a trimmed string
  const safeJeanTypeValue = changeEvent.target.value.trim()
  // Update the transient state with the parsed value
  setJeanType(safeJeanTypeValue)
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

export const JeanTypeChoices = () => {
  let html = `
    <div class="survey-input hidden" id="jean-type-choice">
        <label for="jeanType"><h2>What type of jeans do you own?</h2></label>
      <input type="text" name="jeanType" placeholder="e.g., skinny, straight, bootcut"> 
    </div>`

  return html
}