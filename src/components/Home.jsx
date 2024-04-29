import React from 'react'
import homeImage from '../static/images/home-image.jpg'


function Home() {
  return (
    <div id='home'>
        <div style={{height: "100vh", backgroundImage: `url(${homeImage})` , backgroundSize:"cover", backgroundPosition: "center"}} className="w3-display-container">
        <div className="w3-display-bottom">
        <span className="w3-tag w3-xlarge w3-round-xlarge" style={{fontFamily: "JapFont", fontSize: "2rem", marginBottom: "50px"}}>Open from 11:00 AM to 12:00 PM</span>
        </div>
        <div className="w3-display-middle w3-center">
        <span className="main-name w3-text-light-grey" style={{fontFamily: "JapFont", fontSize: "10rem"}} >SAKURA WAVE</span>
        <p><a href="#menu" className="w3-btn w3-text-light-grey w3-black w3-padding-large w3-round-xxlarge" style={{ fontSize: "2rem"}}>SEE THE MENU</a></p>
    </div>
</div>
    </div>
  )
}

export default Home