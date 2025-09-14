export const LocationChoices = async () => {
    // use await fetch to get the array of locations
    const response = await fetch("http://localhost:8088/socioLocations")

    // await the response and store it in a variable
    const locations = await response.json()

    let html = `
    <div class="survey-input" id="location-choice">
        <label for="location"><h2>What type of area do you live in?</h2></label>
    `

    for (const location of locations) {
        html += `<input type="radio" name="location" value="${location.id}"> ${location.label}`
    }

    html += `
    </div>
    `

    return html
}