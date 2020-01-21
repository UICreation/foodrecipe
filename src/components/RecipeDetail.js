import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const RecipeDetail = (props) => {
  let recipe = props.recipes[0]
  return (
    <div className="recipe-detail">
      <header className="mb3">
        <h3>
          Recipe Details
      </h3>
        <hr />
      </header>
      <div>
        {
          props.recipes.length ?
            <div className="recipe-content">
              <img src={recipe.image} alt={recipe.name} height="400" className="fit" />
              <p className="h2"> {
                recipe.name
              }
                {
                  props.match.params.id === undefined &&
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="bg-silver black text-decoration-none h5 p1 px2 ml2 rounded"
                  >
                    Go to Article</Link>
                }
              </p>
              <p className="m0">
                {
                  recipe.description
                }
              </p>
              <div>
                {
                  recipe.ingredient.length ?
                    <div className="pt2">
                      <header>
                        <p className="h5 bold">Ingredients:</p>
                      </header>
                      <ol className="font-size-small">
                        {
                          recipe.ingredient.map((item, i) => {
                            return (
                              <li key={i.toString()}>
                                <span className="block">
                                  {
                                    `
                      name: ${item.name}, amount: ${item.amount}, unit: ${item.unit}
                      `
                                  }
                                </span>
                              </li>
                            )
                          })
                        }
                      </ol>
                    </div>
                    : null
                }
              </div>
              <div>
                {
                  recipe.step.length ?
                    <div>
                      <header>
                        <p className="h5 bold">Recipe steps:</p>
                      </header>
                      <ol className="font-size-small">
                        {
                          recipe.step.map((item, i) => {
                            return (
                              <li key={i.toString()}>
                                {
                                  item.description
                                }
                              </li>
                            )
                          })
                        }
                      </ol>
                    </div>
                    : null
                }
              </div>
              {recipe.notes &&
                <div>
                  <p className="h5 bold">Recipe note:</p>
                  <p className="font-size-small">
                    {
                      recipe.notes
                    }
                  </p>
                </div>
              }

            </div>
            : null
        }
      </div>
    </div>
  )
}

RecipeDetail.defaultProps = {
  recipes: []
}
RecipeDetail.propTypes = {
  recipes: PropTypes.array,
  match: PropTypes.object
}

export default RecipeDetail
