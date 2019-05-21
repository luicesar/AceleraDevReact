import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchForm from '../SearchForm/SearchForm';
import { Creators as CharactersActions } from '../../redux/characters/reducer';

const Field = ({ component, ...props }) => <input {...props} />;

class SearchBar extends Component {
  state = {
    repositoryInput: ''
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={e => this.setState({ repositoryInput: e.target.value })}
          data-testid="SearchBar"
        />
      </div>
    );
  }
}

export default SearchBar;
