import React from 'react';
import { Container } from 'react-bootstrap'
import MessageSent from '../../Components/MessageSent';
import * as styles from './what-is-ainc.module.scss'

const WhatIsAincPage = () => {

  return (
    <Container>
        <MessageSent>
            <div className={styles.fullscreenImage} />
        </MessageSent>
    </Container>
  );
};

export default WhatIsAincPage;