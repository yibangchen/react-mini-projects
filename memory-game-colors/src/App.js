import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './Block';

  const PAIR_NUM = 10;
  const allColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      guessed: []
    };

    this.setState({colors: allColors.slice(0, 10)});
    // this.initGame(PAIR_NUM);
  }

  initGame(size) { 
    const newColors = new Set();
    while (newColors.size < size)
      newColors.add(allColors[this.rand(allColors.length)]);
    // const colors = this.shuffle(Array.from(newColors).concat(Array.from(newColors)));
    this.setState({colors: allColors.slice(0, 10)});
    // this.setState({guessed: new Array(size * 2)});
  }

  rand = (maximum) => Math.floor(Math.random()*maximum);
  shuffle = (a) => {
    for (let i=a.length-1; i>0; i--){
      const j = this.rand(i+1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  render() {
    return (
      <div className="App">
        <div className = "container">
          { this.state.colors.map((c, i) => <Block key={i}/>) }
        </div>
      </div>
    );
  }
}

export default App;
