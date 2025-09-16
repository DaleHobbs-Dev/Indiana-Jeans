const handleSurveySubmission = (clickEvent) => {
    // Logic to handle survey submission
    if (clickEvent.target.id === "submission-button") {
        // Handle the submission logic here
        console.log("Survey submitted!");
    }
};

export const SubmissionButton = () => {
    document.addEventListener("click", handleSurveySubmission);
    return `<button id="submission-button">Submit Survey</button>`;
}