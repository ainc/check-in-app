import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuButton from '../../Components/MenuButton';

import Balloons from '../../images/Balloons.png';
import TourIcon from '../../images/Tour-Icon.png';
import PeopleMeeting from '../../images/People-Meeting.png'
import Interview from '../../images/Interview-Icon.png'
import Conference from '../../images/TableChairs.png'
import Triangle from '../../images/Triangle.png'
const MenuPage = () => {
    return (
        <div style={{backgroundColor: '#F1F2F2'}}>
        <Container>
            <Row >
                <a href='/' style={{right: '10rem'}}>
                    <h4 className='text-black font-italic'>Go back</h4>
                </a>
            </Row>
            <Row className='text-center'>
                <h1>WHAT BRINGS YOU IN TODAY?</h1>
            </Row>
            <Row className=''>
                <Col className='d-flex justify-content-end'>
                    <MenuButton img={TourIcon} title='Space Tour' link='/tour'/>
                </Col>
                <Col>
                    <MenuButton img={PeopleMeeting} title="Meeting Someone" link='/meeting-someone'/>
                </Col>
            </Row>
            <Row lg={2}>
                <Col className='d-flex justify-content-end'>
                    <MenuButton img={Interview} title="Interview" link='/interview'/>
                </Col>
                <Col>
                    <MenuButton img={Conference} title="Conference Room Rental" link='/conference-room'/>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end'>
                    <MenuButton img={Balloons} title="An Event" link='/event'/>
                </Col>
                <Col>
                    <MenuButton img={Triangle} title="What's Awesome Inc?" link='/what-is-ainc' />
                </Col>
            </Row>
        </Container>
        </div>
    )
}


export default MenuPage;
