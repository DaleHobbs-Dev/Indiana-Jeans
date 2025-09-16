import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./SubmissionButton.js"

import "./eventHub.js"

const container = document.querySelector("#container")

const render = async () => {
    container.innerHTML = `
            ${JeanChoices()}
            ${await LocationChoices()}
            ${SubmissionButton()}
    `
}

render()