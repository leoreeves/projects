import React from 'react';
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
                  <li><a href="http://www.chrish.ndo.co.uk/threehrs.htm" target="_blank" rel="noopener noreferrer">Three Hours</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/wayblue2.htm" target="_blank" rel="noopener noreferrer">Way to Blue*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/daydone.htm" target="_blank" rel="noopener noreferrer">Day Is Done</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/cello.htm" target="_blank" rel="noopener noreferrer">’Cello Song*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/maryjane.htm" target="_blank" rel="noopener noreferrer">Thoughts of Mary Jane</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/manshed.htm" target="_blank" rel="noopener noreferrer">Man in a Shed</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/fruitree.htm" target="_blank" rel="noopener noreferrer">Fruit Tree*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/satsun.htm" target="_blank" rel="noopener noreferrer">Saturday Sun</a></li>
                </ol>
              </section>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12">
              <section className="album">
                <h3>Bryter Layter</h3>
                <img className="img-fluid" src={bryterLayter} alt="Bryter Layter album art" />
                <ol>
                  <li><a href="http://www.chrish.ndo.co.uk/introduc.htm" target="_blank" rel="noopener noreferrer">Introduction*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/hazey2.htm" target="_blank" rel="noopener noreferrer">Hazey Jane II</a></li>
                  <li> <a href="http://www.chrish.ndo.co.uk/atchime.htm" target="_blank" rel="noopener noreferrer">At the Chime of a City Clock*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/oneof.htm" target="_blank" rel="noopener noreferrer">One of These Things First</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/hazey1.htm" target="_blank" rel="noopener noreferrer">Hazey Jane I*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/bryter.htm" target="_blank" rel="noopener noreferrer">Bryter Layter</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/fly.htm" target="_blank" rel="noopener noreferrer">Fly*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/poorboy.htm" target="_blank" rel="noopener noreferrer">Poor Boy</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/northsky.htm" target="_blank" rel="noopener noreferrer">Northern Sky*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/sunday.htm" target="_blank" rel="noopener noreferrer">Sunday*</a></li>
                </ol>
              </section>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12">
              <section className="album">
                <h3>Pink Moon</h3>
                <img className="img-fluid" src={pinkMoon} alt="Pink Moon album art" />
                <ol>
                  <li><a href="http://www.chrish.ndo.co.uk/pinkmoon.htm" target="_blank" rel="noopener noreferrer">Pink Moon*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/placebe.htm" target="_blank" rel="noopener noreferrer">Place to Be</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/road.htm" target="_blank" rel="noopener noreferrer">Road*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/whichwil.htm" target="_blank" rel="noopener noreferrer">Which Will*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/horn.htm" target="_blank" rel="noopener noreferrer">Horn</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/thingsun.htm" target="_blank" rel="noopener noreferrer">Things Behind the Sun*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/know.htm" target="_blank" rel="noopener noreferrer">Know</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/parasite.htm" target="_blank" rel="noopener noreferrer">Parasite*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/freeride.htm" target="_blank" rel="noopener noreferrer">Free Ride</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/harvest.htm" target="_blank" rel="noopener noreferrer">Harvest Breed*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/frommorn.htm" target="_blank" rel="noopener noreferrer">From the Morning*</a></li>
                </ol>
              </section>
            </Col>
            <Col lg="3" md="5" sm="6" xs="12" className="misc-collection">
              <section className="album">
                <h3>Other</h3>
                <img className="img-fluid" src={familyTree} alt="Family Tree album art" />
                <ul>
                  <li><a href="http://www.chrish.ndo.co.uk/timreply.htm" target="_blank" rel="noopener noreferrer">Time of No Reply*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/magic.htm" target="_blank" rel="noopener noreferrer">I Was Made to Love Magic</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/joey.htm" target="_blank" rel="noopener noreferrer">Joey</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/clothes.htm" target="_blank" rel="noopener noreferrer">Clothes of Sand</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/mayfair.htm" target="_blank" rel="noopener noreferrer">Mayfair</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/smoking.htm" target="_blank" rel="noopener noreferrer">Been Smoking Too Long</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/strange.htm" target="_blank" rel="noopener noreferrer">Strange Meeting II</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/rideron.htm" target="_blank" rel="noopener noreferrer">Rider on the Wheel*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/rideron.htm" target="_blank" rel="noopener noreferrer">Black Eyed Dog</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/hanging.htm" target="_blank" rel="noopener noreferrer">Hanging on a Star</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/voice.htm" target="_blank" rel="noopener noreferrer">Voice from the Mountain</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/tow.htm" target="_blank" rel="noopener noreferrer">Tow the Line</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/magic2.htm" target="_blank" rel="noopener noreferrer">Magic - Guitar version*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/farleys.htm" target="_blank" rel="noopener noreferrer">Far Leys/Sketch 1*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/birdflew.htm" target="_blank" rel="noopener noreferrer">Bird Flew By*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/leaving.htm" target="_blank" rel="noopener noreferrer">Leaving Me Behind*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/rain.htm" target="_blank" rel="noopener noreferrer">Rain*</a></li>
                  <li><a href="http://www.chrish.ndo.co.uk/blossom.htm" target="_blank" rel="noopener noreferrer">Blossom*</a></li>
                </ul>
              </section>
            </Col>
          </Row>
        </section>
      </Container>
    )
  }
}
