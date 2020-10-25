import React, { useState, useEffect } from "react";
import client from "../client.js";
import { Link } from "react-router-dom";
import Header from './Header';

const Homepage = () => {
  const [portfolios, setPortfolios] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const scrollToFirstSection = () => {
    $('html, body').animate({
      'scrollTop': $(window).height()
    }, 900, 'swing', function() {})
  }

  // viewDidMount implementation
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

    setIsFetching(true);
    const fetchData = async () => {
      try {
        const result = await client.request(portfoliosQuery);
        setPortfolios(result);
        setIsFetching(false);
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        setIsFetching(false);
      }
    };
    fetchData();
  }, []);

  return(
  <div>
    <Header />

    <div className="hero hero--videoBg">
      <video playsInline autoPlay muted loop className="videobg">
        <source src="./video/vid1_comp.mp4" type="video/mp4" />
      </video>
      <div className="container videoverlay">
        <div className="cols cols--mobile">
          <div className="col col-12 text-centered">
            <h2 className="sh1">Yoseph Andreas</h2>
            <p>Passionate web developer with over 8 years experience</p>
            <p>&nbsp;</p>
            <a className="button" href="#" onClick={scrollToFirstSection}>More about Yoseph</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="hero hero--whiteBg">
      <div className="container">
        <div className="cols">
          <div className="col col--12 col--md-6" id="parallax1">
            <img className="parallax-child" data-depth="1.0" src="./img/dots.png" alt="decorative dots"/>
            <img className="parallax-child icon-grad" data-depth="0.5" src="./img/grad.png" alt="decorative dots"/>
          </div>

          <div className="col col--12 col--md-6">
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

    <div className="hero">
      <div className="container">
        <div className="cols">
          <div className="col col--12 col--md-6 col--md-order-1" id="parallax2">
            <img className="parallax-child" data-depth="1.0" src="./img/dots.png" alt="decorative dots"/>
            <img className="parallax-child icon-dev" data-depth="0.5" src="./img/dev-white.png" alt="developer"/>
          </div>
          <div className="col col--12 col--md-6">
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

    <div className="hero hero--whiteBg">
      <div className="container">
        <div className="cols">
          <div className="col col--12 text-centered">
            <h2 className="sh1 mb-5">Portfolio</h2>
            <p>&nbsp;</p>

            <div className="cols cols--multiline">
            {portfolios &&
              portfolios.allPortfolios.map((portfolio) => (
              <div className="col col--12 col--lg-4" key={`portfolio-${portfolio.slug}`}>
                <Link to={`/portfolio/${portfolio.slug}`} className="kartu">
                  <div className="kartu__image" style={{'backgroundImage':`url(${portfolio.image.url}?w=400)`}}></div>
                  <div className="kartu__excerpt">{ portfolio.title }</div>
                </Link>
              </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  );
}

const portfoliosQuery = `
  query getPortfolios {
    allPortfolios {
      title
      id
      slug
      image {
        url
      }
    }
  }
`;

export default Homepage;