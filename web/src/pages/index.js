import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';

const SlackMessageButton = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [usersFetched, setUsersFetched] = useState(false);
  const [usersArray, setUsersArray] = useState([]);

  const slackAccessToken = process.env.GATSBY_SLACK_TOKEN
  
  const message = 'Hello, this is a test message!';
  const channel = 'U03J93RNF7T' //can use either channel name or member ID to send to individuals

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try{
      axios({
        method: 'post',
        url: 'https://slack.com/api/users.list',
        data: `token=${slackAccessToken}`
      })
      .then((response) => {
        if (response.status === 200){
          setUsersFetched(true)
          setUsersArray(response.data.members);
        }
      })
    } catch(error){
      console.error("Could not query slack users", error);
    }
  };

  const sendMessageToSlack = async () => {
    try {
      axios({
        method: 'post',
        url: 'https://slack.com/api/chat.postMessage',
        data: `text=${message}&channel=${channel}&token=${slackAccessToken}`
      })
      .then((response) =>{
        if (response.status === 200){
          setMessageSent(true)
        }
      })
    } catch (error) {
      console.error('Error sending message to Slack:', error);
    }
  };

  return (
    <div>
      <button onClick={sendMessageToSlack}>Send Slack Message</button>
      {messageSent && <p>Message sent successfully!</p>}
      {usersFetched && (
        <SearchBar users={usersArray} />
      )}
    </div>
  );
};

export default SlackMessageButton;