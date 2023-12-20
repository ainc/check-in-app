import React from 'react';


const MenuButton = (props) => {
    return(
        <div>
            <a href={props.link} style={{textDecoration: 'none'}}>
                <button className='my-3 mx-2'  style={{backgroundColor:'#ED3742', border: 'none', borderRadius: '15px', 
                height:'28rem', width: '28rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <img className='mt-3 pt-3 px-1' style={{width: '15rem', height: 'auto'}} src={props.img}  alt={props.title}/>
                    <h2 className='mb-4 mt-3 pt-3 text-white' style={{ fontSize: '3.4rem', textAlign: 'center', maxWidth: '25rem'}}>{props.title}</h2>
                </button>
            </a>
        </div>
    )
}

export default MenuButton;
