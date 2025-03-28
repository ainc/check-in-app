export default {
    name: "teams",
    type: "document",
    title: "teams",
    fields: [
        {
            title: "Select Team",
            name: "team",
            type: 'string',
            options: {
                list: [
                { title: 'Space Team', value: 'space_team' },
                { title: 'Interview Team', value: 'Interview_team'},
                ]
            }
        },
        {
            title: "team Memebers",
            name: "teamMemebers",
            type: "array",
            of: [{ type: "reference", to: [{ type: "teamMembers" }] }],
          },
    ]
}