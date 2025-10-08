// Transient state to hold user selections before submission
// const transientState = {
//     ownsBlueJeans: false,
//     socioLocationId: 0,
//     jeanType: "",
//     purchaseYear: 0
// }

const transientState = new Map([
    ["ownsBlueJeans", false],
    ["socioLocationId", 0],
    ["jeanType", ""],
    ["purchaseYear", 0]
])

// Setter functions to update the transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation)
}

export const setJeanType = (chosenJeanType) => {
    transientState.set("jeanType", chosenJeanType.trim())
}

export const setPurchaseYear = (chosenYear) => {
    transientState.set("purchaseYear", chosenYear)
}

export const getTransientState = () => {
    return { ...transientState }
}

export const saveSurveySubmission = async () => {
    // Access values from the Map using .get()
    const ownsBlueJeans = transientState.get("ownsBlueJeans")
    const socioLocationId = transientState.get("socioLocationId")
    const jeanType = transientState.get("jeanType")
    const purchaseYear = transientState.get("purchaseYear")

    console.log("Transient State before submission:", transientState)

    // Validate each
    const ownsValid = typeof ownsBlueJeans === "boolean"
    const locationValid = typeof socioLocationId === "number" && socioLocationId > 0
    const jeanTypeValid = typeof jeanType === "string" && jeanType.length > 0
    const purchaseYearValid = typeof purchaseYear === "number" && purchaseYear > 0

    if (!ownsValid || !locationValid || !jeanTypeValid || !purchaseYearValid) {
        window.alert("Please complete the form then submit your responses!")
        return
    }

    // Convert the Map to a plain object before sending it
    const postData = Object.fromEntries(transientState)

    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData)
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions)
    const newSubmission = await response.json()

    // Fire custom event
    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(newSubmissionEvent)

    console.log("Saving survey to database ...\n", postData)

    // Reset the transient state
    transientState.set("ownsBlueJeans", false)
    transientState.set("socioLocationId", 0)
    transientState.set("jeanType", "")
    transientState.set("purchaseYear", 0)
}