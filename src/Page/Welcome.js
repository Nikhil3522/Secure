// const Welcome = () => {
//     return (
//         <div className="welcome-container">
            
//           <h1 className="welcome-title">Welcome to CryptoSec</h1>
//           <p className="welcome-description">Protect your data and privacy with our encryption solutions.</p>
//           <div className="welcome-buttons">
//             <button className="login-button">Login</button>
//             <button className="signup-button">Signup</button>
//           </div>
//           <div className="scroll-down">
//             <div className="chevron"></div>
//             <div className="chevron"></div>
//             <div className="chevron"></div>
//           </div>
//         </div>
//     );
// }

// export default Welcome;


import React from 'react';

function Welcome() {
  return (
    <>
      {/* Canvas */}
      <canvas className="orb-canvas"></canvas>
      {/* Overlay */}
      <div className="overlay bg-blue-300">
        {/* Overlay inner wrapper */}
        <div className="overlay__inner">
          {/* Title */}
          <h1 className="overlay__title">
            Hey, would you like to learn how to create a
            <span className="text-gradient">generative</span> UI just like this?
          </h1>
          {/* Description */}
          <p className="overlay__description">
            In this tutorial we will be creating a generative “orb” animation
            using pixi.js, picking some lovely random colors and pulling it all
            together in a nice frosty UI.
            <strong>We're gonna talk accessibility, too.</strong>
          </p>
          {/* Buttons */}
          <div className="overlay__btns">
            <button className="overlay__btn overlay__btn--transparent">
              <a href="https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/" target="_blank">
                View Tutorial
              </a>
            </button>
            <button className="overlay__btn overlay__btn--colors">
              <span>Randomise Colors</span>
              <span className="overlay__btn-emoji">🎨</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
