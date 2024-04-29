import React from 'react'
import contact from '../static/images/contact.jpg'

function Contact() {
  return (
    <div >
      <img src={contact} className="w3-image w3-greyscale" alt="Map" style={{width:"100%"}} />

      <div id="contact" className="w3-container w3-xlarge w3-padding-top-32" style={{backgroundColor:"#181516" }}>

      <span style={{color:"white"}}>
      <h1  className="w3-center w3-jumbo">Contact</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente consectetur corporis dicta animi necessitatibus iure eum eligendi! Ducimus aut totam voluptatibus illo placeat aliquam commodi!</p>
      <p className="w3-xxlarge"><b>Reserve</b> a table, ask for today's special or just send us a message:</p>
      </span>

      <form action="/action_page.php" target="_blank">

      <p><input className="w3-input w3-padding-16 w3-border w3-round-xxlarge" type="text" placeholder="Name" required name="Name" /></p>

      <p><input className="w3-input w3-padding-16 w3-border w3-round-xxlarge" type="number" placeholder="How many people" required name="People" /></p>

      <p><input className="w3-input w3-padding-16 w3-border w3-round-xxlarge" type="datetime-local" placeholder="Date and time" required name="date" value="2023-12-16T20:00" /></p>

      <p><input className="w3-input w3-padding-16 w3-border w3-round-xxlarge" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>

      <p><button className="w3-button w3-light-grey w3-block w3-round-xxlarge" type="submit" >SEND MESSAGE</button></p>
      </form>

      

      </div>
    </div>
  )
}

export default Contact