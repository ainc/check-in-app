import React from 'react';
import { Container } from 'react-bootstrap'
import * as styles from './index.module.scss'

const IndexPage = () => {

  return (
    <Container>
      <a href='/menu' className={styles.fullscreenImage} />
    </Container>
  );
};

export default IndexPage;