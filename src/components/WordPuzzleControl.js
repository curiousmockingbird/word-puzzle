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

  handleClick(){
    
  }

  handleAddingNewWordToList(){

  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddWordsToGuessForm onNewWordCreation={this.handleAddingNewWordToList} />
      buttonText= 'Guess word'
    } else {
      buttonText = 'Add words for your opponent to guess'
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onCLick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainWordList: state.mainWordList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

WordPuzzleControl = connect(mapStateToProps)(WordPuzzleControl);

WordPuzzleControl.propTypes = {
  mainWordList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

export default WordPuzzleControl;