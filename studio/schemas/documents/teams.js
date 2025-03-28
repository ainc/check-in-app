export default {
    name: "teams",
    type: "document",
    title: "teams",
    fields: [
        {
            title: "spaceTeam",
            name: "Space Team",
            type: "reference",
            to: [{ type: "teamMembers" }],
          },
    ]
}