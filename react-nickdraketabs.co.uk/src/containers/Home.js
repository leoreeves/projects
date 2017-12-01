import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import './Home.css';
import fiveLeavesLeft from '../images/album-covers/five-leaves-left.jpg';
import bryterLayter from '../images/album-covers/bryter-layter.png';
import pinkMoon from '../images/album-covers/pink-moon.jpg';
import familyTree from '../images/album-covers/family-tree.jpg';

class App extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
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
        <Footer />
      </div>
    );
  }
}

export default App;
