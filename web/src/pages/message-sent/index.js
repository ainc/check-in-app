import React, {useEffect} from "react";

const MessageSentPage = () => {
    useEffect(() => {
        // Redirect after x000 milliseconds (x seconds)
        const timeoutId = setTimeout(() => {
          window.location.href = '/'; // Replace '/' with the path to your homepage
        }, 5000);
    
        // Clear the timeout when the component unmounts (optional)
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array ensures the effect runs only once

    return(
        <div>
            <p>Message sent successfully!</p>
        </div>
    )
}

export default MessageSentPage;