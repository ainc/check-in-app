import React from 'react';
import { graphql } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap';
import MenuButton from '../../Components/MenuButton';
import SendSlackMessage from '../../Components/SendSlackMessage';
import GoBackButton from '../../Components/GoBackButton';
import ScreenTimeout from '../../Components/ScreenTimeout';

import Balloons from '../../images/Balloons.png';
import TourIcon from '../../images/Tour-Icon.png';
import PeopleMeeting from '../../images/People-Meeting.png'
import Interview from '../../images/Interview-Icon.png'
import Conference from '../../images/TableChairs.png'
import Triangle from '../../images/Triangle.png'
import './menu.module.scss' //removes overflow

//change 'nin' in query based on who you want to appear on screen

export const query = graphql`
query MyQuery {
    allSanityTeamMembers(filter: {name: {in: ["Kevin Mansur"]}}) { 
      nodes {
        slackID
      }
    }
}`

const MenuPage = ({data}) => {
    const teamMembers = data.allSanityTeamMembers.nodes;
    const slackids = teamMembers.map((node) => node.slackID)
    const channel = 'check-in'
    return (
        <ScreenTimeout>
        <div style={{backgroundColor: '#F2F2F2', minHeight: '100vh'}}>
            <GoBackButton link='/'/>
            <Row className='text-center pt-5'>
                <h1 className='font-weight-bold mt-5' style={{fontSize: '4rem'}}>WHAT BRINGS YOU IN TODAY?</h1>
            </Row>
            <Row className='pt-5'>
                <Col className='d-flex justify-content-end'>
                    <SendSlackMessage slackid={slackids} link='/space-team' channel={channel} message='Someone is here for a space tour!'>
                        <MenuButton img={TourIcon} title='Space Tour' link='/space-team'/>
                    </SendSlackMessage>
                </Col>
                <Col>
                    <button style={{border: 'none', backgroundColor: 'transparent'}}>
                        <MenuButton img={PeopleMeeting} title="Meeting Someone" link='/meeting-someone'/>
                    </button>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col className='d-flex justify-content-end'>
                    <button style={{border: 'none', backgroundColor: 'transparent'}}>
                        <MenuButton img={Interview} title="Interview" link='/interview'/>
                    </button>
                </Col>
                <Col>
                    <SendSlackMessage slackid={slackids} link='/space-team' channel={channel} message='Someone is here for a conference room rental!'>
                        <MenuButton img={Conference} title="Conference Room Rental" link='/space-team'/>
                    </SendSlackMessage>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col className='d-flex justify-content-end'>
                    <SendSlackMessage slackid={slackids} link='/space-team' channel={channel} message='Someone is here for an event!'>
                        <MenuButton img={Balloons} title="An Event" link='/space-team'/>
                    </SendSlackMessage>
                </Col>
                <Col>
                    <SendSlackMessage slackid={slackids} link='/what-is-ainc' channel={channel} message='Someone is here to learn about Awesome Inc'>
                        <MenuButton img={Triangle} title="What's Awesome Inc?" link='/what-is-ainc' channel='' message='Someone is here who does not know Awesome Inc!'/>
                    </SendSlackMessage>
                </Col>
            </Row>
        </div>
    </ScreenTimeout>
    )
}

export default MenuPage;
