import React, { Component } from 'react';

import './TuningsPage.css';

export default class TuningsPage extends React.Component {
  render() {
    return (
      <div className="TuningsPage" id="tunings">
        <section class="container tunings">
          <div class="row">
            <div class="col-md-12">
              <h1>Summary of Nick Drake’s Tunings</h1>
              <p>Lowest string first.</p>
              <p>Suggested tunings include equivalents (i.e. <span class="variation-highlight">CGCFCE</span> includes <span class="variation-highlight">DADGDF#</span>).</p>
              <p><a href="http://sethares.engr.wisc.edu/alternatetunings/alltunings.pdf" target="_blank" rel="noopener">Alternate tuning guide</a> by Bill Sethares.</p>
            </div>
          </div>
          <hr />
          <div id="standard" class="row">
            <div class="col-md-3 col-xs-6">
              <h2>Standard</h2>
              <ul>
                <li><a href="tabs/five-leaves-left/time-has-told-me.html" target="_blank" rel="noopener">Time Has Told Me</a></li>
                <li><a href="tabs/five-leaves-left/river-man.html" target="_blank" rel="noopener">River Man</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/daydone.htm" target="_blank" rel="noopener">Day Is Done</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/poorboy.htm" target="_blank" rel="noopener">Poor Boy</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/thingsun.htm" target="_blank" rel="noopener">Things Behind the Sun</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/joey.htm" target="_blank" rel="noopener">Joey</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/mayfair.htm" target="_blank" rel="noopener">Mayfair</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/strange.htm" target="_blank" rel="noopener">Strange Meeting II</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/birdflew.htm" target="_blank" rel="noopener">Bird Flew By</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/leaving.htm" target="_blank" rel="noopener">Leaving Me Behind</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/rain.htm" target="_blank" rel="noopener">Rain</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>BEBEBE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/manshed.htm" target="_blank" rel="noopener">Man in a Shed</a></li>
                <li> <a href="http://www.chrish.ndo.co.uk/atchime.htm" target="_blank" rel="noopener">At the Chime of a City Clock</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/fly.htm" target="_blank" rel="noopener">Fly</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/northsky.htm" target="_blank" rel="noopener">Northern Sky</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/sunday.htm" target="_blank" rel="noopener">Sunday</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/harvest.htm" target="_blank" rel="noopener">Harvest Breed</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/frommorn.htm" target="_blank" rel="noopener">From the Morning</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/timreply.htm" target="_blank" rel="noopener">Time of No Reply</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>CGCFCE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/introduc.htm" target="_blank" rel="noopener">Introduction</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/hazey2.htm" target="_blank" rel="noopener">Hazey Jane II</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/hazey1.htm" target="_blank" rel="noopener">Hazey Jane I</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/pinkmoon.htm" target="_blank" rel="noopener">Pink Moon</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/whichwil.htm" target="_blank" rel="noopener">Which Will</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/parasite.htm" target="_blank" rel="noopener">Parasite</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/hanging.htm" target="_blank" rel="noopener">Hanging on a Star</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>BBDGBE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/threehrs.htm" target="_blank" rel="noopener">Three Hours</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/fruitree.htm" target="_blank" rel="noopener">Fruit Tree</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <h2>EADF#BE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/cello.htm" target="_blank" rel="noopener">’Cello Song</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/maryjane.htm" target="_blank" rel="noopener">Thoughts of Mary Jane</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>EADEBE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/road.htm" target="_blank" rel="noopener">Road</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/voice.htm" target="_blank" rel="noopener">Voice from the Mountain</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>GGDGBD</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/rideron.htm" target="_blank" rel="noopener">Rider on the Wheel</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/rideron.htm" target="_blank" rel="noopener">Black Eyed Dog</a></li>
                <li><a href="http://www.chrish.ndo.co.uk/tow.htm" target="_blank" rel="noopener">Tow the Line</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>DADGBD</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/bryter.htm" target="_blank" rel="noopener">Bryter Layter</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <h2>DADF#AD</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/oneof.htm" target="_blank" rel="noopener">One of These Things First</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>EADGAE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/clothes.htm" target="_blank" rel="noopener">Clothes of Sand</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>AADEBE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/freeride.htm" target="_blank" rel="noopener">Free Ride</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>CGCFGE</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/placebe.htm" target="_blank" rel="noopener">Place to Be</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <h2>xGDGBbD</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/magic.htm" target="_blank" rel="noopener">I Was Made to Love Magic</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h2>DADGAD</h2>
              <ul>
                <li><a href="http://www.chrish.ndo.co.uk/farleys.htm" target="_blank" rel="noopener">Far Leys / Sketch 1</a></li>
              </ul>
            </div>
          </div>
        </section>
        <footer class="row">
          <div class="col-md-12 text-center">
            <small><p>Music by Nick Drake | Tabs by Chris Healey | Website by <a href="https://leoreeves.github.io/" target="_blank" rel="noopener">Leo Reeves</a></p></small>
          </div>
        </footer>
      </div>
    );
  }
}