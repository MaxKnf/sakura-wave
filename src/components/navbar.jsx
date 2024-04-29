import React from 'react';

function Navbar() {

  const onClick = (id) => {
    window.location.href = `#${id}`;
  };

  return (
    <div className="w3-top w3-bar w3-xlarge w3-black">
      <a href="#home" className="w3-bar-item w3-button" onClick={() => onClick("home")}>HOME</a>
      <a href="#menu" className="w3-bar-item w3-button" onClick={() => onClick("menu")}>MENU</a>
      <a href="#about" className="w3-bar-item w3-button" onClick={() => onClick("about")}>ABOUT</a>
      <a href="#contact" className="w3-bar-item w3-button" onClick={() => onClick("contact")}>CONTACT</a>
    </div>
  );
}

export default Navbar;