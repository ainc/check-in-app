import React from 'react';
import { graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap'
import SendSlackMessage from '../../Components/SendSlackMessage';
import SearchBar from '../../Components/SearchBar';
import TeamMember from '../../Components/TeamMember';
import * as styles from '../meeting-someone/meeting-someone.module.scss';
import GoBackButton from '../../Components/GoBackButton';
import ScreenTimeout from '../../Components/ScreenTimeout';

//change 'nin' in query based on who you want to appear on screen
export const query = graphql`
query MyQuery {
  allSanityTeams(filter: {team: {eq: "Interview Team"}}) {
    nodes {
      teamMemebers {
        slackID
        title
        name
        picture {
          asset {
            gatsbyImageData(width: 250)
          }
        }
      }
    }
  }
}`

const InterviewPage = ({data}) => {
  const teamMembers = data.allSanityTeams.nodes[0].teamMemebers
  return (
    <ScreenTimeout>
    <div style={{backgroundColor: '#F2F2F2', minHeight: '100vh'}}>
        <GoBackButton link='/menu' invert={true}/>
        <Row className={`${styles.titleText}`}>
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <g transform="scale(-1,1) translate(-500,0)">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill:'red'}}></path>
          </g>
          <text x="250" y="50" font-size="23" fill="white" text-anchor="middle" alignment-baseline="middle" font-weight="bold" font-family="Arial, sans-serif">
          WHO CAN WE HELP YOU FIND?
          </text>
        </svg>
          <h1 className='text-center mb-5 text-white'>Who are you here to see?</h1>
        </Row>
        <Row lg={3} style={{display: 'flex', justifyContent: 'center', height: '45vh', flexWrap: 'wrap'}} className='pt-5'>
        {teamMembers.map(node => (
          <SendSlackMessage slackid={node.slackID} teamPage={true} link='/what-is-ainc' channel='check-in' message='Someone is here for an interview!'>
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
      </ScreenTimeout>
  );
};

export default InterviewPage;