import React, { Fragment } from 'react'
import RecipeList from './RecipesList'
import RecipeDetail from './RecipeDetail'

const NODE_ENV = process.env.NODE_ENV || 'development'

class Recipe extends React.Component {
  state = {
    recipe: [],
    isLoaded: false
  }
  componentDidMount() {
    this.getRecipes()
  }
  getRecipes = () => {
    fetch('http://localhost:8002/recipes', {
      method: "GET",
      "Content-Type": 'application/json'
    })
      .then(recipes => recipes.json())
      .then(recipes => this.setState({
        recipes,
        isLoaded: true
      }))
  }
  getRecipe = id => {
    fetch(`http://localhost:8002/recipes/${id}`, {
      method: "GET",
      "Content-Type": 'application/json'
    })
      .then(recipes => recipes.json())
      .then(recipes => this.setState({
        recipes,
        isLoaded: true
      }))
  }
  render() {
    console.log(NODE_ENV)
    const { isLoaded, recipes } = this.state;
    return (
      <div>
        <header>
          <p className="h2">&nbsp; Food Recipes!!!</p>
        </header>
        <div className="recipe-container">
          {
            isLoaded ?
              <Fragment>
                <RecipeList recipes={recipes.recipe} getRecipe={this.getRecipe} />
                <RecipeDetail recipes={recipes.recipe} />
              </Fragment>
              : <div>Loading...</div>
          }

        </div>
      </div>
    );
  }
}

export default Recipe
