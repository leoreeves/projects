import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Introduction extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <header id="introduction">
              <h1>Nick Drake Tabs</h1>
              <p>Hello, welcome to nickdraketabs.co.uk!</p>
              <p>This is a very simple site set up purely to hold all the Nick Drake tabs I’ve worked out over the years. These
                 are the same tabs as having appeared for a long time on Mikael Ledin’s excellent <a href="http://www.algonet.se/~iguana/DRAKE/DRAKE.html"
                target="_blank" rel="noopener">The Nick Drake Files</a>—but as Mikael no longer wishes to update that site, nickdraketabs.co.uk
                 lets me keep the tabs up to date with additions or corrections that I might discover or which people might send
                 me.
              </p>
              <p>You can contact me at chrishealey[aatt]ndirect.co.uk, replacing [aatt] with @. Please write <strong>Nick Drake</strong>            in the subject line or I may miss your mail amongst the waves of spam.</p>
              <p>The tabs are of course provided for free—I hope you enjoy playing them as much as I do.</p>
              <p>― Chris Healey</p>
            </header>
          </Col>
        </Row>
      </Container>
    )
  }
}
