import React, { Component } from 'react';
import Recipe from './Recipe';
import Header from './Header';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    const recipes=[
      {title:"pasta", ingredients:['flour', 'water'], instructions:"Mix ingredients", img:"spaghetti.jpg"},
      {title:"pasta", ingredients:['flour', 'water'], instructions:"Mix ingredients", img:"spaghetti.jpg"},
      {title:"pasta", ingredients:['flour', 'water'], instructions:"Mix ingredients", img:"spaghetti.jpg"}
    ];
    return (
      <div className="App">
        <Header />

        <div className="recipes">
          { recipes.map((r, i) => <Recipe {...r} />) }
        </div>

      </div>
    );
  }
}

export default RecipeApp;
