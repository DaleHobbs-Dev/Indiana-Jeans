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