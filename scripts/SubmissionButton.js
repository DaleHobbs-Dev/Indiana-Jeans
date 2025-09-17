import { saveSurveySubmission } from "./transientState.js";

export const handleSurveySubmission = (clickEvent) => {
    // Logic to handle survey submission
    clickEvent.preventDefault(); // Just in case
    saveSurveySubmission()
    console.log("Survey submitted!");
};

export const SubmissionButton = () => {
    return `<button id="submission-button" type="button">Submit Survey</button>`;
}