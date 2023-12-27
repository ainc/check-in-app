import React from 'react';
import { Container } from 'react-bootstrap'
import MessageSent from '../../Components/MessageSent';
import * as styles from './what-is-ainc.module.scss'
import GoBackButton from '../../Components/GoBackButton';
const WhatIsAincPage = () => {

  return (
    <Container>
        <MessageSent>
            <GoBackButton link='/menu' invert={true}/>
            <div className={styles.fullscreenImage} />
        </MessageSent>
    </Container>
  );
};

export default WhatIsAincPage;