import React from "react";
// import "./App.css";
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://drive.google.com/uc?export=view&id=1rsSyr4LLM7kFEmW-CjY0BLb0eHSifQju"
          alt="logo"
        />
      </div>
      <div className="menu">
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
