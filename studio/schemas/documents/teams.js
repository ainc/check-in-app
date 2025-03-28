export default {
    name: "teams",
    type: "document",
    title: "teams",
    fields: [
        {
            title: "space Team",
            name: "SpaceTeam",
            type: "reference",
            to: [{ type: "teamMembers" }],
          },
    ]
}