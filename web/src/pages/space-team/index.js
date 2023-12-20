import React from 'react';
import { graphql } from "gatsby";
import {Row, Col } from 'react-bootstrap'
import MessageSent from '../../Components/MessageSent';
import Confetti from '../../images/Confetti-Popper.png';
import TeamMember from '../../Components/TeamMember';

export const query = graphql`
query MyQuery {
  allSanityTeamMembers(filter: {name: {in: ["Nick Garnett", "Connor Jones"]}}) {
    nodes {
      picture {
        asset {
          gatsbyImageData(width: 250)
        }
      }
      name
      title
    }
  }
}`

const SpaceTeam = ({data}) => {
    const teamMembers = data.allSanityTeamMembers.nodes

    return(
        <MessageSent>
        <div style={{backgroundColor: '#323232', minHeight: '100vh'}}>
            <img src={Confetti} alt='Confetti Popper' style={{width: '20rem', position: 'absolute', top: '20rem', left: '41%'}}></img>
            <h1 className='text-white text-uppercase text-center' style={{fontSize: '4rem', position: 'absolute', top:'45rem'}}>
                Thanks for letting us know you're here.
            </h1>
            <p className='text-white text-center' style={{fontStyle: 'italic', fontSize: '2.5rem', position: 'absolute', top: '58rem'}}>
                Grab a seat on the red couches and someone from our Workspace team will be with you shortly.
            </p>
            <Row style={{position: 'absolute', top: '75rem', left: '25%'}}>
            {teamMembers.map(node => (
                <Col style={{maxWidth: '400px', marginRight: '2rem'}}>
                    <TeamMember
                    name={node.name}
                    jobTitle={node.title}
                    image={node.picture.asset.gatsbyImageData}
                    spaceTeam={true}
                    />
                </Col>
            ))}
            </Row>
        </div>
        </MessageSent>
    )
}

export default SpaceTeam;
