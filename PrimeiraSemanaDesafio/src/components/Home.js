import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import recipes from "../sample_data/recipes.json";
import Navbar from "./Navbar";

class Home extends Component {

    constructor(props) {
        super(props);

        this.recipes = recipes.results;
        this.state = {
            searchString: "",
            recipes: []
        };
    }

    componentDidMount() {
        this.setState({ recipes: this.recipes });
    }

    onchangeInputNav = e => {
        const value = e.target.value.toLowerCase();
        this.setState({ searchString: e.target.value });
        this.onChange(value);
    };

    onChange(value) {
        const recipesFilter = recipes.results.filter(x => x.title.toLowerCase().includes(value) || x.ingredients.toLowerCase().includes(value));
        this.setState({ recipes: recipesFilter });
    }

    render() {
        const { searchString, recipes } = this.state;
        const  textString  = this.props.match.params.searchString;

        return (
            <div className="App">
                <Navbar value={searchString} onchangeInput={this.onchangeInputNav} />
                <div className="row">
                    { !textString ?
                        recipes.map(item => (
                        <RecipeItem
                            item={item}
                            key={Math.random()}
                            textSearch={searchString.toLowerCase()}
                        />
                    )) : recipes
                                .filter(x => x.title.toLowerCase().includes(textString) || x.ingredients.toLowerCase().includes(textString))
                                .map(item => (
                        <RecipeItem
                            item={item}
                            key={Math.random()}
                            textSearch={searchString.toLowerCase()}
                        />
                    ))
                    }
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home;