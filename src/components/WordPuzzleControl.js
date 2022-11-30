import React from 'react';
import AddWordsToGuessForm from './AddWordsToGuessForm';
//import InputLetterToGuessForm from './InputLetterToGuessForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WordPuzzleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }

  handleAddingNewWordToList = (newWord) => {
    console.log(newWord);
    const { dispatch } = this.props;
    const { id, word } = newWord;
    const action = { 
      type: 'ADD_WORD',
      id: id,
      word: word,
    };
    dispatch(action);
  }

  handleProceedingToPlay = () => {

  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddWordsToGuessForm 
      onNewWordCreation={this.handleAddingNewWordToList} 
      onProceedingToPlay={this.handleProceedingToPlay}/>
      buttonText='Back'
    } else {
      buttonText = 'Add words for your opponent to guess'
    }

    const buttonStyle = {
    marginTop: '10px',
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div style={buttonStyle}>
        <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

WordPuzzleControl.propTypes = {
  mainWordList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainWordList: state.mainWordList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

WordPuzzleControl = connect(mapStateToProps)(WordPuzzleControl);

export default WordPuzzleControl;