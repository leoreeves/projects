import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import fiveLeavesLeft from '../../images/album-covers/five-leaves-left.jpg';
import bryterLayter from '../../images/album-covers/bryter-layter.png';
import pinkMoon from '../../images/album-covers/pink-moon.jpg';
import familyTree from '../../images/album-covers/family-tree.jpg';

export default class Tabs extends React.Component {
  render() {
    return (
      <Container id="tabs">
        <section>
          <hr />
          <Row>
            <Col md="12">
              <h2 className="tabs-heading">Tabs</h2>
              <div className="tab-comments">
                <p>* updated from the Nick Drake Files version</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="3" md="4" sm="6" xs="12">
              <section className="album">
                <h3>Five Leaves Left</h3>
                <img className="img-fluid" src={fiveLeavesLeft} alt="Five Leaves Left album art" />
                <ol>
                  <li><a href="tabs/five-leaves-left/time-has-told-me.html">Time Has Told Me*</a></li>
                  <li><a href="tabs/five-leaves-left/river-man.html">River Man*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/threehrs.htm" target="_blank" rel="noopener">Three Hours</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/wayblue2.htm" target="_blank" rel="noopener">Way to Blue*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/daydone.htm" target="_blank" rel="noopener">Day Is Done</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/cello.htm" target="_blank" rel="noopener">’Cello Song*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/maryjane.htm" target="_blank" rel="noopener">Thoughts of Mary Jane</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/manshed.htm" target="_blank" rel="noopener">Man in a Shed</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/fruitree.htm" target="_blank" rel="noopener">Fruit Tree*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/satsun.htm" target="_blank" rel="noopener">Saturday Sun</a></li>
                </ol>
              </section>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12">
              <section className="album">
                <h3>Bryter Layter</h3>
                <img className="img-fluid" src={bryterLayter} alt="Bryter Layter album art" />
                <ol>
                  <li><a href="http://www.chrish.ndo.co.uk/introduc.htm" target="_blank" rel="noopener">Introduction*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/hazey2.htm" target="_blank" rel="noopener">Hazey Jane II</a></li>
                  <li> <a href="http://www.chrish.ndo.co.uk/atchime.htm" target="_blank" rel="noopener">At the Chime of a City Clock*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/oneof.htm" target="_blank" rel="noopener">One of These Things First</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/hazey1.htm" target="_blank" rel="noopener">Hazey Jane I*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/bryter.htm" target="_blank" rel="noopener">Bryter Layter</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/fly.htm" target="_blank" rel="noopener">Fly*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/poorboy.htm" target="_blank" rel="noopener">Poor Boy</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/northsky.htm" target="_blank" rel="noopener">Northern Sky*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/sunday.htm" target="_blank" rel="noopener">Sunday*</a></li>
                </ol>
              </section>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12">
              <section className="album">
                <h3>Pink Moon</h3>
                <img className="img-fluid" src={pinkMoon} alt="Pink Moon album art" />
                <ol>
                  <li><a href="http://www.chrish.ndo.co.uk/pinkmoon.htm" target="_blank" rel="noopener">Pink Moon*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/placebe.htm" target="_blank" rel="noopener">Place to Be</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/road.htm" target="_blank" rel="noopener">Road*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/whichwil.htm" target="_blank" rel="noopener">Which Will*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/horn.htm" target="_blank" rel="noopener">Horn</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/thingsun.htm" target="_blank" rel="noopener">Things Behind the Sun*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/know.htm" target="_blank" rel="noopener">Know</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/parasite.htm" target="_blank" rel="noopener">Parasite*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/freeride.htm" target="_blank" rel="noopener">Free Ride</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/harvest.htm" target="_blank" rel="noopener">Harvest Breed*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/frommorn.htm" target="_blank" rel="noopener">From the Morning*</a></li>
                </ol>
              </section>
            </Col>
            <Col lg="3" md="5" sm="6" xs="12" className="misc-collection">
              <section className="album">
                <h3>Other</h3>
                <img className="img-fluid" src={familyTree} alt="Family Tree album art" />
                <ul>
                  <li><a href="http://www.chrish.ndo.co.uk/timreply.htm" target="_blank" rel="noopener">Time of No Reply*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/magic.htm" target="_blank" rel="noopener">I Was Made to Love Magic</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/joey.htm" target="_blank" rel="noopener">Joey</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/clothes.htm" target="_blank" rel="noopener">Clothes of Sand</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/mayfair.htm" target="_blank" rel="noopener">Mayfair</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/smoking.htm" target="_blank" rel="noopener">Been Smoking Too Long</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/strange.htm" target="_blank" rel="noopener">Strange Meeting II</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/rideron.htm" target="_blank" rel="noopener">Rider on the Wheel*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/rideron.htm" target="_blank" rel="noopener">Black Eyed Dog</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/hanging.htm" target="_blank" rel="noopener">Hanging on a Star</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/voice.htm" target="_blank" rel="noopener">Voice from the Mountain</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/tow.htm" target="_blank" rel="noopener">Tow the Line</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/magic2.htm" target="_blank" rel="noopener">Magic - Guitar version*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/farleys.htm" target="_blank" rel="noopener">Far Leys/Sketch 1*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/birdflew.htm" target="_blank" rel="noopener">Bird Flew By*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/leaving.htm" target="_blank" rel="noopener">Leaving Me Behind*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/rain.htm" target="_blank" rel="noopener">Rain*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/blossom.htm" target="_blank" rel="noopener">Blossom*</a></li>
                </ul>
              </section>
            </Col>
          </Row>
        </section>
      </Container>
    )
  }
}
