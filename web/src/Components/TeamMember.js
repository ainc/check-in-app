import React from "react";
import {GatsbyImage} from 'gatsby-plugin-image'
import {Col} from 'react-bootstrap'

const TeamMember = (props) => {
    return(
            <div className="d-flex flex-column align-items-center">
                <GatsbyImage image={props.image} alt={props.name} className={`rounded-circle mt-3 mx-auto`} style={{width: '250px', height: '250px'}}/>
                <h2 className={`${props.spaceTeam ? 'text-white' : ''} text-center`} style={{fontSize: '2rem'}}>{props.name}</h2>
                <p className={`${props.spaceTeam ? 'text-white' : ''} text-center`} style={{fontStyle: 'italic', fontSize: '1.25rem'}}>{props.jobTitle}</p>
            </div>
    )
}

export default TeamMember;
