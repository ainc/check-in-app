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
                ]
            }
        },
        {
            title: "team Memebers",
            name: "teamMemebers",
            type: "array",
            of: [{ type: "refrence", to: [{ type: "teamMembers" }] }],
          },
    ]
}