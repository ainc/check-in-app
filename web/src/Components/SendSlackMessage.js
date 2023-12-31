import React, {useState} from "react";
import axios from 'axios';

const SendSlackMessage = (props) => {
    const [messageSent, setMessageSent] = useState(false);

    const slackAccessToken = process.env.GATSBY_SLACK_TOKEN
    const channel = props.channel //can use either channel name or member ID to send to individuals
    var message;
    const goToNewPage = () => {
        window.location.href = props.link
    }

    const sendMessageToSlack = async () => {
      if (Array.isArray(props.slackid)) {
        const mentionedUsers = props.slackid.map((slackid) => `<@${slackid}>`).join(', ');
        message = `${mentionedUsers} ${props.message}`;
      }
      else {
        message = `<@${props.slackid}> ${props.message}`;
      }
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
        <div className={`${ props.teamPage ? 'd-flex flex-column align-items-center' :''}`}>
            <button onClick={sendMessageToSlack} style={{border: 'none', backgroundColor: 'transparent'}} {...props}>
                {props.children}
            </button>
            {messageSent && goToNewPage()}
        </div>
    )
};

export default SendSlackMessage;