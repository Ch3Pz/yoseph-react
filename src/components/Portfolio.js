import React, { useEffect, useState } from "react";
import client from "../client.js";
import Markdown from "react-markdown";

const Portfolio = props => {
  const [portfolio, setPortfolio] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const goBack = () => {
    props.history.goBack();
  }

  useEffect(
    () => {
      const initParallax = () => {
        const parallax = $('#parallax').get(0);
        const parallax1Instance = new Parallax(parallax, {
          selector: ".parallax-child",
          pointerEvents: "all"
        });
      }
      
      const fetchData = async () => {
        try {
          const variables = {
            slug: props.match.params.slug
          };
          const result = await client.request(query, variables);
          setPortfolio(result.portfolio);
          setIsFetching(false);
          initParallax();
        } catch (error) {
          console.error(JSON.stringify(error, undefined, 2));
          setIsFetching(false);
        }
      };

      fetchData();
    },
    [props.match.params.slug]
  );

  return (
    <React.Fragment>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        portfolio && (
        
          <div className="hero hero--whiteBg">
            <div className="container">
              <div className="cols">

                <div className="col col--12 col--md-6 content mb-5">
                  <h2>{ portfolio.title }</h2>
                  <p>&nbsp;</p>
                  <Markdown source={portfolio.content} escapeHtml={false} className="mb-4" />
                  <h5>Visit Site:</h5>
                  <p className="mb-4"><a href={portfolio.projectUrl} target="_blank">{portfolio.projectUrl}</a></p>
                  <p className="text-bold"><a onClick={goBack}>&lt;&lt; Back</a></p>
                </div>

                <div className="col col--12 col--md-6" id="parallax">
                  <img className="parallax-child" data-depth="1.0" src="/img/dots.png" alt="decorative dots"/>
                  <div className="parallax-child image-portfolio" data-depth="0.5" style={{'backgroundImage':`url(${portfolio.image.url}?w=500)`}}></div>
                </div>

              </div>
            </div>
          </div>
      )
    )}
    </React.Fragment>
  );
}

const query = `
  query portfolio($slug: String!) {
    portfolio(filter: {slug: {eq: $slug}}) {
      slug
      title
      projectUrl
      image {
        url
      }
      content
    }
  }
`;

export default Portfolio;