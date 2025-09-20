// Transient state to hold user selections before submission
const transientState = {
    ownsBlueJeans: false,
    socioLocationId: 0
}

// Setter functions to update the transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {

    // Destructure the transient state for easier access
    const { ownsBlueJeans, socioLocationId } = transientState

    // Check for incomplete input
    const ownsValid = typeof ownsBlueJeans === "boolean"
    const locationValid = typeof socioLocationId === "number" && socioLocationId > 0

    // Alert the user if the form is incomplete
    if (!ownsValid || !locationValid) {
        window.alert("Please complete the form then submit your responses!")
        return
    }

    // Prepare the POST request options
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    // Send the data to the API
    const response = await fetch("http://localhost:8088/submissions", postOptions)
    const newSubmission = await response.json()

    //new custom event and dispatched onto the DOM making it available to all listeners
    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
    // dispatch the event to notify other parts of the application
    document.dispatchEvent(newSubmissionEvent)

    // Start building the POST request here
    console.log("Saving survey to database ...\n", transientState)

    // Reset the transient state after submission
    transientState.ownsBlueJeans = false
    transientState.socioLocationId = 0
}