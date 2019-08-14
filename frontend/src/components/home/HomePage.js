import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './HomePage.css'
import InfoBox from './InfoBox'
import Footer from './Footer'
import LargeTextBox from './LargeTextBox'

  const HomePage = ({user, clickMap, clickAdmin}) => {

    const handleMapClick = () => {
      clickMap();
    }

    const handleAdminClick = () => {
      clickAdmin();
    }


    return(
      <Router>
      <Switch>

    <div>
      <div id="home-page">
      <button class="button-admin" onClick={() => handleAdminClick()}>Admin</button>


        <div class="hero-text">
          <h1 class="title">HikeBuddy<i class="fas fa-hiking"></i></h1>
          <p class="blurb">Walk the Scottish National Trail, the long distance walking route running the length of Scotland from Kirk Yetholm to Cape Wrath</p>
          <button class="button" onClick={() => handleMapClick()}>Login</button>
          <a href="#about"><button class="button" >About</button></a>
        </div>
      </div>
      <a name="about">
      <div class="info-boxes">
        <InfoBox title="Scottish National Trail" blurb="The Scottish National Trail is an 864 kilometre-long long distance walking route running the length of Scotland from Kirk Yetholm to Cape Wrath.Devised by outdoors writer and broadcaster Cameron McNeish, the Trail offers very varied walking, following long-established footpaths for much of the distance but becoming progressively more difficult as it heads north, finishing with a tough stretch of backpacking - with some pathless and demanding terrain - on the final stretch of the Cape Wrath Trail." pic="./images/mountains.jpg"/>
        <InfoBox title="Historic Route" blurb="The Trail begins at Kirk Yetholm in the Scottish Borders - the end point of the Pennine Way. It follows part of St Cuthbert's Way northwards to the town of Melrose with its picturesque Abbey, and then traces the course of the Southern Upland Way to Traquair.The route runs by the River Tweed up to Peebles before climbing over the Meldon Hills and then the Pentlands to reach the capital city, Edinburgh. Towpaths give very easy walking alongside the Union Canal to Linlithgow and on to the amazing Falkirk Wheel." pic="./images/house.jpg"/>
        <InfoBox title="Full of Life" blurb=" The Forth and Clyde Canal carries the route to the northern fringes of Glasgow before it strikes north to join the West Highland Way at Milngavie. At Drymen the trail switches to follow the Rob Roy Way to Callander, before a wilder stretch passes through Comrie and over the hills and glens of Perthshire to Aberfeldy and then Pitlochy." pic="./images/waterfall.jpg"/>
      </div>
      </a>


        <LargeTextBox />
        <Footer />


    </div>
    </Switch>
    </Router>

    )
  }


export default HomePage;
