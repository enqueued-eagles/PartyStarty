import React from 'react';
import axios from 'axios';
import DisplayFood from './DisplayFood.js';

class SearchFood extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      term: ``,
      recipeData: [],
      picking: true
    }
    this.setTerm = this.setTerm.bind(this);
    this.submit = this.submit.bind(this);
    this.setPickStatus = this.setPickStatus.bind(this);
  }

  setTerm (e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    })
  }

  submit (e) {
    //console.log('hi');
    e.preventDefault();
    axios({
      method: 'POST',
      url: `/recipes`,
      data: {
        q: this.state.term
      }
    })
    .then(result => {
      var recipe = result.data.hits.map(recipe => recipe.recipe);
      console.log(recipe);
      this.setState({
        recipeData: recipe
      })      
    })
    .catch(err => {
      console.log('SearchFood.js', err);
      return;
    })
  }

  setPickStatus () {
    this.setState({
      picking: !this.state.picking
    })
  }

  render () {
    return (
      <div className="searchFoodContainer">
        <h2 className="searchHeader">Pick three meals</h2>
        {this.state.picking ? 
          (<div className='searchFood'>
            <div>
              <form  className="input-group sfInputGroup" onSubmit={this.submit}>
                <input type="text" className="form-control" placeholder='Search For food' onChange={this.setTerm} value={this.state.term} />  
                <input className="btn btn-info" type="submit" value="Search!" />
              </form>
            </div>
          </div>)
          :
          null
        }
        {
          this.state.recipeData.length > 0 ? 
          (<div className="foodDisplay">
            <DisplayFood status={this.props.status} 
              handleFoodPicked={this.props.handleFoodPicked || null} 
              recipes={this.state.recipeData} 
              setPickStatus={this.setPickStatus}/>
          </div>)
          :
          null
        }
      </div>
    )
  }
}

export default SearchFood;