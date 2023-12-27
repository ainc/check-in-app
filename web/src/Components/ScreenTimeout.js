import React, {useEffect} from "react";

const ScreenTimeout = (props) => {
    useEffect(() => {
        // Redirect after x000 milliseconds (x seconds)
        const timeoutId = setTimeout(() => {
          window.location.href = '/'; // Replace '/' with the path to your homepage
        }, 60000);
    
        // Clear the timeout when the component unmounts (optional)
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array ensures the effect runs only once

    return(
        <div>
            {props.children}
        </div>
    )
}

export default ScreenTimeout;