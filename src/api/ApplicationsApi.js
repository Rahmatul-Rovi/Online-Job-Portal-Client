export const myApplicationsPromise = email => {
    return fetch(`https://job-portal-server-50h1rzimu-rahmatul-rovis-projects.vercel.app/applications?email=${email}`)
    .then(res => res.json())
}