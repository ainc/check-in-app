import React from "react";
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Col} from 'react-bootstrap'

const TeamMember = (props) => {
    return(
        <Col>
                <GatsbyImage image={props.image} alt={props.name} className={`rounded-circle mt-3 mx-auto`}/>
                <h1 className='text-center'>{props.name}</h1>
                <p className='text-center'>{props.jobTitle}</p>
        </Col>
    )
}

export default TeamMember;
