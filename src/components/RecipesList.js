import React from 'react'
import PropTypes from 'prop-types'
import RecipeListItem from './RecipeListitem';

const RecipeList = (props) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="recipe-list">

    {
      props.recipes.length ?
        <ul className="list-reset">
          {
            props.recipes.slice(0, 10).map(item => {
              return <RecipeListItem
                item={item}
                key={item.id}
                isFavourite={props.favourateItem.includes(item.id, 0)}
                {...props}
              />
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
  recipes: PropTypes.array
}

export default RecipeList
