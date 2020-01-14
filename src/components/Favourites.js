import React from 'react';
import RecipeList from './RecipesList';
import PropTypes from 'prop-types';

const Favourites = props => {
    const { recipes, favouriteRecipes, addToFavourite } = props;
    if (favouriteRecipes.length) {
        return (
            <div className="px4">
                <p className="h3">Favourites Dishes List</p>
                <RecipeList
                    recipes={recipes.recipe.filter(item => favouriteRecipes.includes(item.id))}
                    addToFavourite={addToFavourite}
                    favourateItem={favouriteRecipes}
                />

            </div>
        );
    }
    return (
        <div className="px2">
            <p className="h4 regular">
                You don't have favourite item yet. You can add them from recipe list
                </p>
        </div>
    )

}

Favourites.propTypes = {
    recipes: PropTypes.object,
    favouriteRecipes: PropTypes.array,
    addToFavourite: PropTypes.func
}

export default Favourites;