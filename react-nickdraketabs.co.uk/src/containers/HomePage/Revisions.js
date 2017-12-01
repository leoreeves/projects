import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Revisions extends React.Component {
  render() {
    return (
      <Container id="revisions">
        <hr />
        <Row>
          <Col md="12">
            <section>
              <h2>Revisions</h2>
              <ul>
                <li>Aug 07 - Tabs added for the “Far Leys” instrumental (appears on <em>Family Tree</em> as “Sketch 1”) and original
                    guitar version of “Made to Love Magic”.</li>
                <li>Sep 08 - Tabs added for “Bird Flew By” and “Leaving Me Behind”.</li>
                <li>Jan 11 - “Hanging on a Star” now includes the <em>Made to Love Magic</em> version.</li>
                <li>Mar 11 - “Way to Blue” now improved, working mainly from the piano version of <em>Family Tree</em>.</li>
                <li>Sep 12 - “Rain” and “Blossom” added.</li>
                <li>Nov 13 - Major update to “Hazey Jane I”.</li>
                <li>Mar 14 - Updates to “Black Eyed Dog”.</li>
                <li>Mar 15 - Minor updates to “Which Will”.</li>
                <li>Jan 16 - Put the correct solo section in “Things Behind the Sun”.</li>
                <li>Mar 16 - “Cello Song” made less rubbish.</li>
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    )
  }
}
