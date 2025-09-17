import { saveSurveySubmission } from "./transientState.js";

const handleSurveySubmission = (clickEvent) => {
    // Logic to handle survey submission
    if (clickEvent.target.id === "submission-button") {
        // Handle the submission logic here
        saveSurveySubmission()
        console.log("Survey submitted!");
    }
};

export const SubmissionButton = () => {
    document.addEventListener("click", handleSurveySubmission);
    return `<button id="submission-button">Submit Survey</button>`;
}