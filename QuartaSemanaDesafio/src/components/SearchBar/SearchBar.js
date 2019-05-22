import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchForm from '../SearchForm/SearchForm';
import { Creators as CharactersActions } from '../../redux/characters/reducer';

const Field = ({ component, ...props }) => <input {...props} />;

class SearchBar extends Component {
  state = {
    repositoryInput: ''
  };

  handleChangeCharacter = e => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ repositoryInput: e.target.value });
    this.props.loadCharacterRequest(this.state.repositoryInput);
    this.props.loadCharacterSuccess(this.state.repositoryInput);
  };

  render() {
    return (
      <div>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={this.handleChangeCharacter}
          data-testid="SearchBar"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters
});

const mapDispatchToProps = dispatch => bindActionCreators(CharactersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
