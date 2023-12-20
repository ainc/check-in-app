import React from 'react';
import { graphql } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap';
import MenuButton from '../../Components/MenuButton';
import SendSlackMessage from '../../Components/SendSlackMessage';

import Balloons from '../../images/Balloons.png';
import TourIcon from '../../images/Tour-Icon.png';
import PeopleMeeting from '../../images/People-Meeting.png'
import Interview from '../../images/Interview-Icon.png'
import Conference from '../../images/TableChairs.png'
import Triangle from '../../images/Triangle.png'

export const query = graphql`
query MyQuery {
    allSanityTeamMembers(filter: {name: {in: ["Nick Garnett", "Connor Jones"]}}) { 
      nodes {
        slackID
      }
    }
}`

const MenuPage = ({data}) => {
    const teamMembers = data.allSanityTeamMembers.nodes;
    const slackids = teamMembers.map((node) => node.slackID)
    return (
        <div>
            <Row className='text-center pt-5'>
                <h1 className='font-weight-bold' style={{fontSize: '4rem'}}>WHAT BRINGS YOU IN TODAY?</h1>
            </Row>
            <Row className='pt-5'>
                <Col className='d-flex justify-content-end'>
                    <SendSlackMessage slackid={slackids}>
                        <MenuButton img={TourIcon} title='Space Tour' link='/space-team'/>
                    </SendSlackMessage>
                </Col>
                <Col>
                    <MenuButton img={PeopleMeeting} title="Meeting Someone" link='/meeting-someone'/>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col className='d-flex justify-content-end'>
                    <MenuButton img={Interview} title="Interview" link='/interview'/>
                </Col>
                <Col>
                    <SendSlackMessage slackid={slackids}>
                        <MenuButton img={Conference} title="Conference Room Rental" link='/space-team'/>
                    </SendSlackMessage>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col className='d-flex justify-content-end'>
                    <SendSlackMessage slackid={slackids}>
                        <MenuButton img={Balloons} title="An Event" link='/space-team'/>
                    </SendSlackMessage>
                </Col>
                <Col>
                    <SendSlackMessage slackid={slackids}>
                        <MenuButton img={Triangle} title="What's Awesome Inc?" link='/what-is-ainc' />
                    </SendSlackMessage>
                </Col>
            </Row>
        </div>
    )
}

export default MenuPage;
