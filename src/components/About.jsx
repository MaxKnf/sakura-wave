import React from 'react'
import aboutimage from '../static/images/about-image.jpg'

function About() {
  return (
    <div id="about" class="w3-container w3-xlarge" style={{backgroundColor: "#181516", color:"white", padding:"120px 0"}}>

        <h1 class="w3-center w3-jumbo" style={{fontFamily:"JapFont"}}>ABOUT</h1>

        <p style={{fontSize: "1.3rem", margin:"20px"}}>Sakura wave was founded Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni eius velit dignissimos tempora quod, iure sit libero autem consequatur modi! Tempore, voluptatibus corrupti autem explicabo est veritatis odit repellat.
        Tenetur, ipsa et rerum, animi maiores sit quas dolorum nostrum sequi veniam molestias alias magni dolores itaque aspernatur error unde enim quasi asperiores, esse ab sunt iusto! Excepturi, aspernatur possimus!
        Illo tempora nam in sunt autem veritatis suscipit fugit vitae similique maxime voluptas sapiente voluptatum totam nisi, voluptatibus eaque doloribus? Autem neque aspernatur rerum, dolor tempora ex nihil? Recusandae, similique.
        Harum itaque odio maiores expedita nesciunt amet ea ex sunt adipisci praesentium sapiente aliquam, assumenda omnis commodi vero perspiciatis temporibus dicta minima numquam? Quas, sit! Earum voluptatem reprehenderit repudiandae delectus.</p>

        {/* <p><strong>The Chef?</strong> Mr. Italiano himself
        <img src="/w3images/chef.jpg" style={{width:"150px"}} class="w3-circle w3-right" alt="Chef" /></p>
        <p>We are proud of our interiors.</p> */}
        <p class="w3-padding-16 w3-stretch">
        <img src={aboutimage} style={{ width:"100%"}} alt="Restaurant" />
        </p>
        <h1>Opening Hours</h1>

        <div class="w3-row">
        <div class="w3-half">
        <p>Mon &amp; Tue CLOSED</p>
        <p>Wednesday 11.00 am - 12.00 pm</p>
        <p>Thursday 11:00 am - 12:00 pm</p>
        </div>
        <div class="w3-half">
        <p>Friday 11:00 am - 12:00 pm</p>
        <p>Saturday 11:00 - 11:00 pm</p>
        <p>Sunday Closed</p>
        </div>
        </div>

    </div>
  )
}

export default About