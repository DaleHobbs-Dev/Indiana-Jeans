const transientState = {
    ownsBlueJeans: false,
    socioLocationId: 0
}

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {

    const { ownsBlueJeans, socioLocationId } = transientState

    // Check for incomplete input
    const ownsValid = typeof ownsBlueJeans === "boolean"
    const locationValid = typeof socioLocationId === "number" && socioLocationId > 0


    if (!ownsValid || !locationValid) {
        window.alert("Please complete the form then submit your responses!")
        return
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    // Send the data to the API
    const response = await fetch("http://localhost:8088/submissions", postOptions)
    // Start building the POST request here
    console.log("Saving survey to database ...\n", transientState)
}