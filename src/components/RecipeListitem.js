import React from 'react'
import PropTypes from 'prop-types'

const RecipeListItem = ({
    item,
    isFavourite,
    ...props
}) => {
    return (
        <li>
            <span className="block pointer" onClick={() => props.getRecipe(item.id)}>
                <span title="Add to Favourite" onClick={
                    e => {
                        e.stopPropagation()
                        props.addToFavourite(item.id)
                    }
                }>
                    {
                        isFavourite ? <code className="green">&#x02295;</code> : <code>&#x0229D;</code>
                    } &nbsp;
                  </span>
                {
                    item.name
                }
            </span>
        </li>
    );
}

RecipeListItem.propTypes = {
    item: PropTypes.object,
    isFavourite: PropTypes.bool,
    addToFavourite: PropTypes.func,
    getRecipe: PropTypes.func
}

export default RecipeListItem