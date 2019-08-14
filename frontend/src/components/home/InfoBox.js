import React from 'react';
import './InfoBox.css'


const InfoBox = ({title, blurb, pic}) => {

  return(

    <div id="infobox">

      <div class="info-box">
        <img src={pic} alt="pic"/>
        <h1 class="info-box-h1">{title}</h1>
        <p class="info-box-p">{blurb}</p>
      </div>

    </div>
  )
}

export default InfoBox;
