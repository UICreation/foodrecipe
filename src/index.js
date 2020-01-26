import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import Logo from './static/images/shivam.jpg';
import Recipe from './components'
import Favourites from './components/Favourites'
import RecipeInfo from './components/Recipe'
import Header from './components/Header'
import NotFound from './components/NotFound'
import './static/css/common.css'

class App extends React.Component {
  state = {
    recipes: null,
    favouriteRecipes: [],
    isLoaded: false
  }
  componentDidMount() {
    this.getRecipes()
  }
  getRecipes = () => {
    // fetch('http://localhost:8002/recipes', {
      fetch('/api/recipes', {
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
    fetch(`/api/recipe?id=${id}`, {
      method: "GET",
      "Content-Type": 'application/json'
    })
      .then(recipes => recipes.json())
      .then(recipes => this.setState({
        recipes,
        isLoaded: true
      }))
  }
  addToFavourite = id => {
    if (this.state.favouriteRecipes.indexOf(id) === -1) {
      this.setState(({ favouriteRecipes, ...prevState }) => ({
        prevState,
        favouriteRecipes: [...favouriteRecipes, id]
      }))
    } else {
      this.setState(({ favouriteRecipes, ...prevState }) => ({
        prevState,
        favouriteRecipes: favouriteRecipes.filter(item => item !== id)
      }))
    }
  }
  render() {
    const { isLoaded, recipes, favouriteRecipes } = this.state
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              path="/"
              exact
              render={props => <Recipe {...this.state} {...props} getRecipe={this.getRecipe} addToFavourite={this.addToFavourite} />}
            />
            <Route
              path="/favourites"
              render={() => <Favourites {...this.state} getRecipe={null} addToFavourite={this.addToFavourite} />}
            />
            <Route path="/recipe/:id" component={RecipeInfo} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
