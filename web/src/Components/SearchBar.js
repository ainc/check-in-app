import React, { useState, useEffect, useRef } from 'react';
import * as styles from './SearchBar.module.scss';
import axios from 'axios';
import  Keyboard  from 'react-simple-keyboard'; //https://hodgef.com/simple-keyboard/documentation/
import 'react-simple-keyboard/build/css/index.css';


const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');  
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [messageSent, setMessageSent] = useState(false);
    const usersArray = props.users;
    const slackAccessToken = process.env.GATSBY_SLACK_TOKEN

    const message = 'Hello, this is a test message!';
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    /* KEYBOARD */
    const onChange = input => {
      setSearchQuery(input);
    };
  
    const handleShift = () => {
      const newLayoutName = layout === "default" ? "shift" : "default";
      setLayout(newLayoutName);
    };
  
    const onKeyPress = button => {
      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") handleShift();
    };
  
    const onFocus = () => {
      // Show the on-screen keyboard when the input is focused
      setIsKeyboardVisible(true);
    };
    
    /*
    Does not work currently- goal is to get the keyboard to go away when somewhere else on the screen is touched. 
    Next best thing - close keyboard button
    const onBlur = () => {
      // Hide the on-screen keyboard when the input loses focus
      setIsKeyboardVisible(false);
    };
    */
    

    /* SEARCH */
    useEffect(() => {
        // Filter the user list based on the search query.
        if(searchQuery) {
            const searchQueryLower = searchQuery.toLowerCase();
            const filtered = usersArray.filter(user => user.real_name && user.real_name.toLowerCase().includes(searchQueryLower));
            setFilteredUsers(filtered);
        }
    }, [searchQuery, usersArray]);
    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const sendMessageToSlack = async (userID) => {
        try {
          axios({
            method: 'post',
            url: 'https://slack.com/api/chat.postMessage',
            data: `text=${message}&channel=${userID}&token=${slackAccessToken}`
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

    const goToNewPage = () => {
        window.location.href = '/message-sent'
    }

    return(
        <div className={styles.searchContainer}>
            <input
            type="text"
            placeholder="Search for a user"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={onFocus}
            className={styles.searchInput}
            />

            {isKeyboardVisible && (
            <div className='simple-keyboard'>
            <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            </div>
            )}

            <ul className= {styles.userList}>
                {filteredUsers.map((user, index) =>
                <li onClick={() => sendMessageToSlack(user.id)} key={index} className={styles.userItem}>
                    <img src={user.profile.image_72} alt='profile pic' style={{borderRadius: '50%'}}/>
                    <p>{user.real_name}</p>
                    {messageSent && goToNewPage()}
                </li>
                )}
            </ul>
        </div>
    );
};

export default SearchBar;