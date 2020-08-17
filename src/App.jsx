import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  renderHomeScreen = () => {
    return (
      <div className="header">
        <h1 className="jes">JESSE</h1>
        <h1 className="site">(JAS-WA.com)</h1>
        <h1 className="kat">KATABARWA</h1>
        <h1 className="mail">@GMAIL</h1>
        <img className="dia" width="300px" src="/diasphora.png" />
        {/* <img className="dia2" width="300px" src="/diasphora.png" /> */}
        <img
          className="lust"
          width="200px"
          src="/JESSEKATABARWA_635_2x-1.jpg"
        />
        <img className="black" width="200px" src="/01_blackstigma_2015.png" />
        <img className="white" width="200px" src="02_whitestigma_2015.png" />
        <img className="arca" width="600px" src="ARCA.jpeg" />
        <img className="futur" width="500px" src="futur-parle.jpg" />
        <img
          className="posters"
          width="300px"
          src="Screen Shot 2020-08-17 at 2.02.32 PM.png"
        />
      </div>
    );
  };
  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={this.renderHomeScreen} />
      </BrowserRouter>
    );
  };
}

export default App;
