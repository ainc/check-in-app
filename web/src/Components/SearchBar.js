import React, { useState, useEffect, useRef } from 'react';
import * as styles from './SearchBar.module.scss';
import axios from 'axios';
import  Keyboard  from 'react-simple-keyboard'; //https://hodgef.com/simple-keyboard/documentation/
import 'react-simple-keyboard/build/css/index.css';
import SendSlackMessage from './SendSlackMessage';
import { Row } from 'react-bootstrap';
const SearchBar = () => {
    const [usersFetched, setUsersFetched] = useState(false);
    const [usersArray, setUsersArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');  
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const slackAccessToken = process.env.GATSBY_SLACK_TOKEN

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
      // Filter the user list based on the search query - happens with each new letter typed in search
      if(searchQuery) {
          const searchQueryLower = searchQuery.toLowerCase();
          const filtered = usersArray.filter(user => user.real_name && user.real_name.toLowerCase().includes(searchQueryLower));
          setFilteredUsers(filtered);
        }
    }, [searchQuery, usersArray]);
    
    useEffect(() => {
      //get the list of users - only happens on page load
      fetchUsers();
    }, [])

    const fetchUsers = async () => {
      try{
        await axios({
          method: 'post',
          url: 'https://slack.com/api/users.list',
          data: `token=${slackAccessToken}`
        })
        .then((response) => {
          if (response.status === 200){
            setUsersFetched(true)
            setUsersArray(response.data.members);
            console.log(usersArray)
          }
        })
      } catch(error){
        console.error("Could not query slack users", error);
      }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };


    return(
      <div>
        {usersFetched && (
        <div className={styles.searchContainer}>
            <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={onFocus}
            className={styles.searchInput}
            />
        </div>
        )}
        {isKeyboardVisible && (
                      <Row className='simple-keyboard'>
                      <Keyboard
                      keyboardRef={r => (keyboard.current = r)}
                      layoutName={layout}
                      onChange={onChange}
                      onKeyPress={onKeyPress}
                      />
                      </Row>
                      )}
        <div>
        <ul className= {styles.userList}>
                {filteredUsers.map((user, index) =>
                <SendSlackMessage slackid={user.id}>
                  <li key={index} className={`${styles.userItem} mb-3 fluid`}>
                      <img src={user.profile.image_192} alt='profile pic' className='rounded-circle mb-3'/>
                      <h4 className=''>{user.real_name}</h4>
                  </li>
                </SendSlackMessage>
                )}
            </ul>
        </div>
      </div>
    );
};

export default SearchBar;