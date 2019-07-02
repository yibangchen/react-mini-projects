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
      colors: this.initGame(PAIR_NUM),
      guessed: Array(PAIR_NUM*2).fill(0),
      isGameOver: false,
      matchColorIndex: -1
    };
  }

  handleClick = (k) => {
    const newGuessed = this.state.guessed.slice();

    if (this.state.matchColorIndex === -1) {
      newGuessed[k] = 1;        
      this.setState({
        guessed: newGuessed,
        matchColorIndex: k
      });
    } else if (this.state.colors[this.state.matchColorIndex] == this.state.colors[k]) {
      newGuessed[k] = 1;
      this.setState({
        guessed: newGuessed,
        matchColorIndex: -1
      }, () => {
        if (this.state.guessed.every(val => val==1)) this.handleNewGame();
      });
    } else {
      newGuessed[k] = 1;
      this.setState({
        guessed: newGuessed,
      }, () => {
        setTimeout(() => {
          newGuessed[k] = 0;
          newGuessed[this.state.matchColorIndex] = 0;
          this.setState({
            guessed: newGuessed,
            matchColorIndex: -1
          });
        }, 2000);
      });
    }
  }

  handleNewGame = () => {
    this.setState({
      colors: this.initGame(PAIR_NUM),
      guessed: Array(PAIR_NUM*2).fill(0),
      matchColorIndex: -1
    });
  }

  initGame(size) { 
    const newColors = new Set();
    while (newColors.size < size)
      newColors.add(allColors[this.rand(allColors.length)]);
    return this.shuffle(Array.from(newColors).concat(Array.from(newColors)));
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
          { this.state.colors.map((c, i) => 
            <Block 
              key={i}
              color={c}
              showIndicator={this.state.guessed[i]}
              onClickBlock={() => this.handleClick(i)}
            />
            ) }
        </div>
      </div>
    );
  }
}

export default App;
