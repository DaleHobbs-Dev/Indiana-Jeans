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