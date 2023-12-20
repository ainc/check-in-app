import React from 'react';
import { graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap'
import SendSlackMessage from '../../Components/SendSlackMessage';
import SearchBar from '../../Components/SearchBar';
import TeamMember from '../../Components/TeamMember';
import * as styles from '../meeting-someone/meeting-someone.module.scss'
export const query = graphql`
query MyQuery {
  allSanityTeamMembers(filter: {name: {nin: ["Nick Garnett", "Keith McMunn"]}}) {
    nodes {
      picture {
        asset {
          gatsbyImageData(width: 250)
        }
      }
      name
      title
      slackID
    }
  }
}`

const MeetingSomeonePage = ({data}) => {
  const teamMembers = data.allSanityTeamMembers.nodes

  return (
    <div>
        <Row className={`${styles.titleText}`}>
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <g transform="scale(-1,1) translate(-500,0)">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill:'red'}}></path>
          </g>
          <text x="250" y="50" font-size="20" fill="white" text-anchor="middle" alignment-baseline="middle" font-weight="bold" font-family="Arial, sans-serif">
          Who are you here to see?
          </text>
        </svg>
          <h1 className='text-center mb-5 text-white'>Who are you here to see?</h1>
        </Row>
        <Row lg={3} style={{display: 'flex', justifyContent: 'center', height: '45vh', flexWrap: 'wrap'}} className='pt-5'>
        {teamMembers.map(node => (
          <SendSlackMessage slackid={node.slackID} teamPage={true}>
            <Col style={{maxWidth: '300px'}}>
            <TeamMember
              name={node.name}
              jobTitle={node.title}
              image={node.picture.asset.gatsbyImageData}
            />
            </Col>
          </SendSlackMessage>
          ))}
        </Row>
        <h2 className='text-center'>Don't see who you're looking for?</h2>
        <h3 className='text-center font-italic'>Use the search bar below.</h3>
        <Row>
          <SearchBar />
        </Row>
      </div>
  );
};

export default MeetingSomeonePage;