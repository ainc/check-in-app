export default {
    name: 'teamMembers',
    type: 'document',
    title: 'Team Members',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Full Name'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Job Title'
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture'
        },
        {
            name: 'slackID',
            type: 'string',
            title: 'Slack ID',
            description: "Found by going to the persons slack profile, clicking the three dots and clicking 'Copy Member ID'",
        }
    ]
}