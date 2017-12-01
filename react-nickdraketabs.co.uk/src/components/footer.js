import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid="true" className="footer text-center">
          <Row>
            <Col md="12">
              <p>Shameless plug: my band <a href="http://www.arco.org.uk/" target="_blank" rel="noopener noreferrer">Arco's</a> website</p>
              <small><p>Music by <a href="http://www.brytermusic.com/" target="_blank" rel="noopener noreferrer">Nick Drake</a> | Tabs by Chris Healey <span class="bar">|</span> Website by <a href="https://leoreeves.github.io/" target="_blank" rel="noopener noreferrer">Leo Reeves</a></p></small>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}