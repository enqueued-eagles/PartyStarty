import React from 'react';

class PickMode extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    var recipes = this.props.recipes;
    return (<div style={{margin:`auto`}} className="fadeIn">
      {recipes.map((recipe, i) => {
        return ( 
          <div className='individualRecipe' key={i}>
            <div id="chooseThis">
              <img 
                className="foodImage img-fluid rounded" 
                src={recipe.image} 
                onClick={() => this.props.addtoFoods(recipe)}/>
              <div className='text'
                onClick={() => this.props.addtoFoods(recipe)}
                >Choose This</div>
            </div>
            <div className='noOverFlow recipeInfo'>{recipe.label}</div>
            <a className='noOverFlow recipeInfo' href={recipe.url} target='_blank'>{recipe.source}</a><br/>
          </div>
        )
      })}
    </div>)
  }
} 

export default PickMode;