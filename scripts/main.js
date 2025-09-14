import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"

const mainContainer = document.querySelector("#container")

const render = async () => {
    container.innerHTML = `
        <form action="">
            ${JeanChoices()}
            ${await LocationChoices()}
        </form>
    `
}

render()