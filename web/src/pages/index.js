import React from 'react';
import { graphql } from "gatsby";
import { Container, Row } from 'react-bootstrap'
import SendSlackMessage from '../Components/SendSlackMessage';
import SearchBar from '../Components/SearchBar';
import TeamMember from '../Components/TeamMember';

export const query = graphql`
query MyQuery {
  allSanityTeamMembers (filter: {name: {ne: "Nick Garnett"}}){
    nodes {
      picture {
        asset {
          gatsbyImageData(width: 150)
        }
      }
      name
      title
      slackID
    }
  }
}`

const IndexPage = ({data}) => {
  const teamMembers = data.allSanityTeamMembers.nodes

  return (
    <Container>
      <Row lg={3}>
       {teamMembers.map(node => (
        <SendSlackMessage slackid={node.slackID}>
          <TeamMember
            name={node.name}
            jobTitle={node.title}
            image={node.picture.asset.gatsbyImageData}
          />
        </SendSlackMessage>
        ))}
      </Row>
      <h2 className='text-center'>Don't see who you're looking for?</h2>
      <h3 className='text-center font-italic'>Use the search bar below.</h3>
      <Row>
        <SearchBar />
      </Row>
    </Container>
  );
};

export default IndexPage;