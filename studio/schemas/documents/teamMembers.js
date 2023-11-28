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
            title: 'Slack ID'
        }
    ]
}