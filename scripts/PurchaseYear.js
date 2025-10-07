import { setPurchaseYear } from "./transientState.js"

export const handlePurchaseYearChoice = (changeEvent) => {
    console.log("Purchase year changed:", changeEvent.target.value)
    // Convert the string value to a number
    const safePurchaseYearValue = Number(changeEvent.target.value)
    // Update the transient state with the parsed value
    setPurchaseYear(safePurchaseYearValue)
}

export const PurchaseYear = () => {
    let html = `
    <div class="survey-input hidden" id="purchase-year-choice">
        <label for="purchaseYear"><h2>In what year did you purchase your most recent pair of jeans?</h2></label>
      <input type="number" name="purchaseYear" placeholder="e.g., 2020"> 
    </div>`

    return html
}