export const jobsCreatedByPromise = email => {
    return fetch(`https://job-portal-server-50h1rzimu-rahmatul-rovis-projects.vercel.app/jobs?email=${email}`)
    .then(res => res.json())

}