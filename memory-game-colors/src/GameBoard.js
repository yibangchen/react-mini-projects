import React, { Component } from 'react';
import Block from './Block';

const PAIR_NUM = 10;
const status = {
  UNCLICKED: 0,
  CLICKED: 1,
  CORRECT: 2
};
const allColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
            "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
            "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
            "DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
            "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
            "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue",
            "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
            "Gray","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
            "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
            "LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon",
            "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow",
            "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
            "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
            "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
            "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
            "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
            "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
            "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen",
            "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
            "Yellow","YellowGreen"];

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.initGame(PAIR_NUM),
      clickStatus: Array(PAIR_NUM*2).fill(status.UNCLICKED),
      isGameOver: false,
      lastClickIndex: -1
    };
  }

  handleClick = (k) => {
    const newClickStatus = this.state.clickStatus.slice();

    if (this.state.clickStatus[k] !== status.UNCLICKED) {
      //shake it;
    } else if (this.state.lastClickIndex === -1) {
      newClickStatus[k] = status.CLICKED;        
      this.setState({
        clickStatus: newClickStatus,
        lastClickIndex: k
      });
    } else if (this.state.colors[this.state.lastClickIndex] == this.state.colors[k]) {
      newClickStatus[k] = status.CORRECT;
      newClickStatus[this.state.lastClickIndex] = status.CORRECT;
      this.setState({
        clickStatus: newClickStatus,
        lastClickIndex: -1
      }, () => {
        if (this.state.clickStatus.every(val => val==status.CORRECT)) 
          this.handleNewGame();
      });
    } else {
      newClickStatus[k] = status.CLICKED;
      this.setState({
        clickStatus: newClickStatus,
      }, () => {
        setTimeout(() => {
          newClickStatus[k] = status.UNCLICKED;
          newClickStatus[this.state.lastClickIndex] = status.UNCLICKED;
          this.setState({
            clickStatus: newClickStatus,
            lastClickIndex: -1
          });
        }, 1500);
      });
    }
  }

  handleNewGame = () => {
    this.setState({
      colors: this.initGame(PAIR_NUM),
      clickStatus: Array(PAIR_NUM*2).fill(status.UNCLICKED),
      lastClickIndex: -1
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
      <div className = "container">
        { this.state.colors.map((c, i) => 
          <Block 
            key={i}
            color={c}
            showIndicator={this.state.clickStatus[i]}
            onClickBlock={() => this.handleClick(i)}
          />
          ) }
      </div>
    );
  }
}

export default GameBoard;
