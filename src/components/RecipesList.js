import React from 'react'
import PropTypes from 'prop-types'

const RecipeList = (props) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="recipe-list">
    <header>
      <h3>
        Recipe List
      </h3>
    </header>

    {
      props.recipes.length ?
        <ul className="list-reset">
          {
            props.recipes.slice(0, 10).map(item => {
              return <li key={item.id}>
                <span className="block pointer" onClick={() => props.getRecipe(item.id)}>
                  - {
                    item.name
                  }
                </span>
              </li>
            })
          }
        </ul>
        : null
    }

  </div>
);

RecipeList.defaultProps = {
  recipes: []
}
RecipeList.propTypes = {
  recipes: PropTypes.array,
  getRecipe: PropTypes.func
}

export default RecipeList
