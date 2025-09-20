// function to fetch and display survey submissions
export const SubmissionList = async () => {
    // Fetch submissions with expanded socioLocation data
    const response = await fetch("http://localhost:8088/submissions?_expand=socioLocation")
    // Await the response and store it in a variable
    const submissions = await response.json()

    let html = `
    <div id="survey-submissions-list">
    <h2>Survey Submissions</h2>
    <ul>
    `

    // Use map to create HTML for each submission and join them into a single string
    html += submissions.map(submission => `
        <section class="survey-submission-container">
        <h2>Submission ${submission.id}</h2>
        <p>Owns Blue Jeans: ${submission.ownsBlueJeans}</p> <p>Location: ${submission.socioLocation.label}</p>
        </section>
        `).join("")

    html += `
    </ul>
    </div>
    `

    return html
}