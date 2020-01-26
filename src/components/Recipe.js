import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';
const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:8002' : '';

class RecipeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            isLoaded: false
        }
    }
    getRecipe = () => {
        let id = this.props.match.params.id;
        fetch(`${url}/api/recipe?id=${id}`, {
            method: "GET",
            "Content-Type": 'application/json'
        })
            .then(recipes => recipes.json())
            .then(recipes => this.setState({
                recipes,
                isLoaded: true
            }))
    }
    componentDidMount() {
        this.getRecipe()
    }
    render() {
        const { recipes, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="px2">
                    <RecipeDetail {...this.props} recipes={recipes.recipe} />
                </div>
            );
        }
        return (
            <div className="px2">
                Loading...
        </div>
        )
    }
}

RecipeInfo.propTypes = {
    match: PropTypes.object
}

export default RecipeInfo;