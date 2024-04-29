import React from 'react'
import sushi1 from '../static/images/sushi_set_1.jpg'
import ramen1 from '../static/images/ramen_set_1.jpg'
import yakitori1 from '../static/images/yakitori_set_1.jpg'

function Menu() {
  return (
    <div id="menu" className="w3-container w3-black w3-xxlarge" style={{padding: "0px 0px"}} >
        <h1 className="w3-center w3-jumbo w3-padding-32" style={{fontFamily:"JapFont"}}>THE MENU</h1>
        <div className="w3-row w3-center w3-border w3-border-dark-grey">
        <a href="#sushi"><div className="w3-third w3-padding-large w3-grey">Sushi</div></a>
        <a href="#ramen"><div className="w3-third w3-padding-large w3-hover-grey">Ramen</div></a>
        <a href="#yakitori"><div className="w3-third w3-padding-large w3-hover-grey">Yakitori</div></a>
        </div>

        <h1 id="sushi" className="w3-center w3-jumbo w3-padding-32">SUSHI</h1>
        <div className="w3-container w3-white" style={{padding: "0px 0px"}}>
        
        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1 >Sushi one</h1>
            <div><img src={sushi1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        <hr style={{
          border:"0",
          borderTop:"1.5px solid #d5d5d5",
          margin: "20px 0"
        }}/>
        
        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1 >Sushi two</h1>
            <div><img src={sushi1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        <hr style={{
          border:"0",
          borderTop:"1.5px solid #d5d5d5",
          margin: "20px 0"
        }}/>

        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Sushi three</h1>
            <div><img src={sushi1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
    

        <h1 id="ramen" className="w3-black w3-center w3-jumbo w3-padding-32">RAMEN</h1>
        <div className="w3-container w3-white w3-padding-32">

        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Ramen one</h1>
            <div><img src={ramen1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        <hr style={{
          border:"0",
          borderTop:"1.5px solid #d5d5d5",
          margin: "20px 0"
        }}/>

        
        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Ramen two</h1>
            <div><img src={ramen1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        <hr style={{
          border:"0",
          borderTop:"1.5px solid #d5d5d5",
          margin: "20px 0"
        }}/>

        
        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Ramen three</h1>
            <div><img src={ramen1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>

        </div>

        <h1 id="yakitori" className="w3-black w3-center w3-jumbo w3-padding-32">YAKITORI</h1>
        <div className="w3-container w3-white w3-padding-32">

        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Yakitori one</h1>
            <div><img src={yakitori1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        <hr style={{
          border:"0",
          borderTop:"1.5px solid #d5d5d5",
          margin: "20px 0"
        }}/>

        
        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Yakitori two</h1>
            <div><img src={yakitori1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        <hr style={{
          border:"0",
          borderTop:"1.5px solid #d5d5d5",
          margin: "20px 0"
        }}/>

        
        <div style={{display:"flex", flexDirection: "column", margin:"20px 0"}}>
            <h1>Yakitori three</h1>
            <div><img src={yakitori1} alt="" style={{width: "250px"}}/></div>
            <div className="w3-text-grey">Ingredient one, Ingredient two, Ingredient three</div>
            <div>$12.50</div>   
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Menu