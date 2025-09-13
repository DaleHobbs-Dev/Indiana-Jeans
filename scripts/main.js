import { JeanChoices } from "./JeanChoices.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    container.innerHTML = `
        <form action="">
            ${JeanChoices()}
        </form>
    `
}

render()