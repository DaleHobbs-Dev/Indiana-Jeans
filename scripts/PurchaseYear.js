import { setPurchaseYear } from "./transientState.js"

export const handlePurchaseYearChoice = (changeEvent) => {
    console.log("Purchase year changed:", changeEvent.target.value)
    // Convert the string value to a number
    const safePurchaseYearValue = Number(changeEvent.target.value)
    // Update the transient state with the parsed value
    setPurchaseYear(safePurchaseYearValue)
}

export const PurchaseYear = () => {
    const currentYear = new Date().getFullYear()
    const startYear = 2000
    let yearOptions = ""

    for (let year = currentYear; year >= startYear; year--) {
        yearOptions += `<option value="${year}">${year}</option>`
    }

    let html = `
    <div class="survey-input hidden" id="purchase-year-choice">
        <label for="purchaseYear"><h2>In what year did you purchase your most recent pair of jeans?</h2></label>
        <select name="purchaseYear">
            <option value="0">-- Select Year --</option>
            ${yearOptions}
        </select>
    </div>
  `

    return html
}