import React, { Fragment } from 'react'
import RecipeList from './RecipesList'
import RecipeDetail from './RecipeDetail'
import PropTypes from 'prop-types'

const NODE_ENV = process.env.NODE_ENV || 'development'

class Recipe extends React.Component {

  render() {
    const { isLoaded, recipes, favouriteRecipes, addToFavourite, getRecipe } = this.props;
    return (
      <div className="recipe-container">
        {
          isLoaded ?
            <Fragment>
              <div>
                <header>
                  <h3 className="regular">
                    Recipe List
                  </h3>
                  <hr />
                </header>
                <RecipeList
                  recipes={recipes.recipe}
                  getRecipe={getRecipe}
                  addToFavourite={addToFavourite}
                  favourateItem={favouriteRecipes}
                />
              </div>
              <RecipeDetail {...this.props} recipes={recipes.recipe} />
            </Fragment>
            : <div>Loading...</div>
        }

      </div>
    );
  }
}

Recipe.propTypes = {
  isLoaded: PropTypes.bool,
  recipes: PropTypes.object,
  favouriteRecipes: PropTypes.array,
  addToFavourite: PropTypes.func,
  getRecipe: PropTypes.func
}

export default Recipe
