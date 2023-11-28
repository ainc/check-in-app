import React, {useState} from "react";
import axios from 'axios';

const SendSlackMessage = (props) => {
    const [messageSent, setMessageSent] = useState(false);

    const message = `<@${props.slackid}> Hello, this is a test message!`;
    const slackAccessToken = process.env.GATSBY_SLACK_TOKEN
    const channel = 'U03J93RNF7T' //can use either channel name or member ID to send to individuals

    const goToNewPage = () => {
        window.location.href = '/message-sent'
    }

    const sendMessageToSlack = async () => {
        try {
          axios({
            method: 'post',
            url: 'https://slack.com/api/chat.postMessage',
            data: `text=${message}&channel=${channel}&token=${slackAccessToken}`
          })
          .then((response) => {
            if (response.status === 200){
              setMessageSent(true)
              console.log('sent')
            }
          })
        } catch (error) {
          console.error('Error sending message to Slack:', error);
        }
    };
    
    return(
        <div>
            <button onClick={sendMessageToSlack} style={{border: 'none', backgroundColor: 'transparent'}} {...props}>
                {props.children}
            </button>
            {messageSent && goToNewPage()}
        </div>
    )
}

export default SendSlackMessage;