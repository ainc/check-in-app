import React from 'react';


const MenuButton = (props) => {
    return(
        <div>
            <a href={props.link}>
                <button className='my-3 mx-2'  style={{backgroundColor:'#ED3742', border: 'none', borderRadius: '15px', 
                height:'25rem', width: '25rem'}}>
                    <img className='mb-auto' style={{maxWidth: '15rem', height: 'auto'}} src={props.img}  alt={props.title}/>
                    <h2 className='mt-3 mb-auto text-white'>{props.title}</h2>
                </button>
            </a>
        </div>
    )
}

export default MenuButton;
