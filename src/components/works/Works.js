/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Police from '../../assets/recentprojects/police_project.png';
import Tiles from '../../assets/recentprojects/map_tiles_project.png';
import Airport from '../../assets/recentprojects/airport_project.png';
import Twitter from '../../assets/recentprojects/twitter_project.png';
import Portfolio from '../../assets/recentprojects/web_portfolio_project.png';
import Forest from '../../assets/recentprojects/forest_project.png';
import Coral from '../../assets/recentprojects/coral_project.png';
import Nafplio from '../../assets/recentprojects/nafplio_project.png';
import Flow from '../../assets/recentprojects/flow_project.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Mapping Police Violence',
      role: `Data Analyst`,
      description: `I created this web map using Leaflet to feature data from
      law enforcement agencies around the state, and visualize the number of
      police killings in the Pacific Northwest from January 2013 to March 2021.`,
      alter: 'Mapping Police Violence',
      link: `https://ramouj.github.io/Mapping-Police-Violence-in-Seattle/`,
      image: `${Police}`,
    },
    {
      id: 2,
      title: 'Map Tile Generation',
      role: `Geographic Information Systems (GIS) Analyst`,
      description: `I generated 4 flavors of map tiles using QGIS and plotted
      data on two of them about 911 calls across the Seattle metro area. I
      added details using Leaflet and hosted the interactive maps on Github
      pages.`,
      alter: 'Map Tile Generation',
      link: `https://github.com/RamouJ/Map-Tile-Generation`,
      image: `${Tiles}`,
    },
    {
      id: 3,
      title: 'Airport Web Map',
      role: `Data Analyst`,
      description: `I created an interactive choropleth map based on the number
      of airports within each state. There are also markers signifying whether
      or not each airport is equipped with a control tower.`,
      alter: 'Airport Web Map',
      link: `https://github.com/RamouJ/Airport-Web-Map`,
      image: `${Airport}`,
    },
    {
      id: 4,
      title: 'Geo-Twitter Analysis',
      role: `Data Analyst`,
      description: `I designed a map of geo-tagged tweets with harvested twitter
      data using an API-based Crawler. I used the python based library, tweepy,
      to filter tweets through the keyword 'blm' and give insights into the
      public perception of the black lives matter movement.`,
      alter: 'Geo-Twitter Analysis',
      link: `https://github.com/RamouJ/Geo-tagged-Tweets`,
      image: `${Twitter}`,
    },
    { 
      id: 5,
      title: 'Web Portfolio',
      role: `Web Developer`,
      description: `I used a bootstrap HTML template as the basis of my
      portfolio design. I made customizations & stored my source code in a
      Github repo, then deployed to github-pages to allow external users to
      view my portfolio.`,
      alter: 'Web Portfolio',
      link: `https://ramouj.github.io/html-portfolio/`,
      image: `${Portfolio}`,
    },
    { 
      id: 6,
      title: 'Forestry Data Analysis',
      role: `Data Analyst`,
      description: `I used R language to explore a data set about forest area
      from the World Bank around the globe. The visualizations analyze the 
      changes in forestry levels over time, as well as how different factors
      have impacted forestry levels all over the world.`,
      alter: 'Forestry Data Analysis with Shiny',
      link: `https://ramouj.shinyapps.io/a8-data-app-RamouJ/`,
      image: `${Forest}`,
    },
    { 
      id: 7,
      title: 'Coral Reef Data Visualization',
      role: "Data Analyst",
      description: `This this web app was created as part of our Informatics
       201 course at the University of Washington's Information School. We 
       analyzed data from the NOAA on various coral reef sites in the Caribbean
       area which focused on trying to mitigate the spread of white band disease
       in the coral reefs. Our app compares two of the data sets from the experiment
       and analyzes the effectiveness of the various treatments for the disease,
       as well as why the disease has been eradicated or not.`,
      alter: 'Coral Reef Data Visualization with Shiny',
      link: `https://ramouj.shinyapps.io/Info201-Final_Northern-Stark/`,
      image: `${Coral}`,
    },
    { 
      id: 8,
      title: 'Branding Nafplio, Greece',
      role: `Project Manager`,
      description: `I spent the Summer of 2018 studying social justice in Greece.
      In the town of Nafplio, I took the role of project manager and was tasked with
      branding the old town to attract more tourists.`,
      alter: 'Branding Nafplio, Greece',
      image: `${Nafplio}`,
      link: "https://thisisnafplio.weebly.com/"
    },
    { 
      id: 9,
      title: 'Ready, Set, Flow',
      role: `Product Manager`,
      description: `This project was created in my Informatics 200 course at
       the University of Washington Information school. I delivered a prototype of 
       a product designed to make the education of menstruation for young women 
       easy and enjoyable.`,
      alter: 'Ready, Set, Flow',
      image: `${Flow}`,
      link: "https://myreadysetflow.weebly.com/"
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <a target="_blank" rel="noopener noreferrer" href={ project.link } >
                  <TextDecrypt text={ project.title } />
                </a>
              </h3>
              <p className="description">
                { project.description }
              </p>
              {/*<p> {"Role: " + project.role}</p>*/}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
