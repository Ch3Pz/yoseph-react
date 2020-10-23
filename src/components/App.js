import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Parallax from 'parallax-js'
import $ from 'jquery';

import Header from './Header';

const App = () => {
  useEffect(() => {
		var parallax1 = $('#parallax1').get(0);
		var parallax1Instance = new Parallax(parallax1, {
			selector: ".parallax-child",
			pointerEvents: "all"
    });
    
		var parallax2 = $('#parallax2').get(0);
		var parallax2Instance = new Parallax(parallax2, {
			selector: ".parallax-child",
			pointerEvents: "all"
		});
  }, []);

  return(
  <Router>
    <Header />
    {/*
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/recipes/:slug" component={Recipe} />
      <Route path="/about" component={About} />
    </main>
    */}
    {/*
    <div className="container">
      <div className="cols cols--multiline">
        <div className="col col--1">one</div>
        <div className="col col--2">two</div>
        <div className="col col--3">three</div>
      </div>
    </div>
    */}
    <div className="hero hero--fullheight">
      <video playsInline autoPlay muted loop className="videobg">
        <source src="./video/vid4.mp4" type="video/mp4" />
      </video>
      <div className="container videoverlay">
        <div className="cols">
          <div className="col text-centered">
            <h2 className="sh1">Introduction</h2>
            <p>I am a passionate full-stack web developer with over 8 years experience.</p>
            <p>&nbsp;</p>
            <a class="button" href="javascript:nextSection()">Check out more about me</a>
          </div>
        </div>
      </div>
    </div>

    <div className="hero hero--fullheight hero--whiteBg">
      <div className="container">
        <div className="cols">
          <div className="col col--6" id="parallax1">
            <img className="parallax-child" data-depth="1.0" src="./img/dots.png" alt="decorative dots"/>
            <img className="parallax-child" data-depth="0.5" src="./img/grad.png" alt="decorative dots"/>
          </div>

          <div className="col col--6">
            <h2 className="sh1">Educational Background</h2>
            <p>&nbsp;</p>
            <ul>
              <li>
                RMIT University, Melbourne, Australia Graduated Dec 2009 <br/>
                Bachelor of IT (Multimedia Design) GPA: 3.40 / 4.0
              </li>
              <li>
                Bina Nusantara University, Jakarta, Indonesia Graduated Nov 2010 <br/>
                Sarjana Komputer GPA: 3.31 / 4.0
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div className="hero hero--fullheight">
      <div className="container">
        <div className="cols">
          <div className="col col--6 col--md-order-1" id="parallax2">
            <img className="parallax-child" data-depth="1.0" src="./img/dots.png" alt="decorative dots"/>
            <img className="parallax-child" data-depth="0.5" src="./img/dev-white.png" alt="developer"/>
          </div>
          <div className="col col--6 ">
            <h2 className="sh1">Professional Skills</h2>
            <p>&nbsp;</p>
            <ul>
              <li>PHP Web Development (Drupal, Composer, Wordpress, Laravel, Yii)</li>
              <li>Frontend Web Development (Javascipt, React, CSS, Babel, gulp, npm)</li>
              <li>Database (MySQL, Microsoft SQL Server, DB2, SQLite)</li>
              <li>Scripting: Bash</li>
              <li>Familiarity with Photoshop, Figma, Sketch</li>
              <li>Design Patterns</li>
              <li>Linux / Server Administration</li>
              <li>C++ / Obj-C, Java, Java Servlets</li>
              <li>OPEN GL, GLUT, irrLicht for C++</li>
              <li>Computer Hardware</li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div className="hero hero--fullheight hero--whiteBg">
      <div className="container">
        <div className="cols">
          <div className="col col--12 text-centered">
            <h2 className="sh1">Portfolio</h2>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>


  </Router>
  );
}

export default App;