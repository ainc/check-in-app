import React from 'react';
import BackArrow from '../images/back-arrow.png'

const GoBackButton = (props) => {

    const handleClick = () => {
        window.location.href = props.link
    }
    const imageStyle = {
        filter: props.invert ? 'invert(100%)' : 'none',
        width: '40px',
    }
    const textStyle = {
        color: props.invert ? 'white' : 'black',
        position: 'absolute', 
        left: '50px', 
        top: '5px', 
        width: '70px', 
        fontStyle: 'italic'
    }
    return(
        <button onClick={handleClick} className='' style={{border: 'none', backgroundColor: 'transparent', left: '15px', position: 'absolute', top: '15px', zIndex: '2', }}>
            <img src={BackArrow} style={imageStyle}/>
            <p className='fw-bold' style={textStyle}>Go Back</p>
        </button>
    )
}

export default GoBackButton;