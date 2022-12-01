import React from 'react';
import AddWordsToGuessForm from './AddWordsToGuessForm';
//import InputLetterToGuessForm from './InputLetterToGuessForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputLetterToGuessForm from './InputLetterToGuessForm';

class WordPuzzleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfWords: 0
    }
  }

  handleClick = () => {
    console.log('test');
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_WORD_FORM'
    }
    dispatch(action);
  }

  handleGuessWord = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_LETTER_FORM'
    }
    dispatch(action);
  }

  handleAddingNewWordToList = (newWord) => {
    console.log(newWord, this.props.mainWordList);
    const { dispatch } = this.props;
    const { id, word } = newWord;
    const action = { 
      type: 'ADD_WORD',
      id: id,
      word: word,
    };
    dispatch(action);
    this.setState({numberOfWords: this.state.numberOfWords + 1});
    console.log(this.state.numberOfWords)
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText1 = null;
    let buttonText2 = null;

    const button1Style = {
      marginTop: '10px',
      display: null,
      }
  
      const button2Style = {
      marginTop: '10px',
      display: null,
      }

    if (this.props.wordFormVisibleOnPage) {
      currentlyVisibleState = <AddWordsToGuessForm 
      onNewWordCreation={this.handleAddingNewWordToList}
      numberOfWordsAdded={this.state.numberOfWords}/>
      buttonText1='Back';
      button2Style.display = 'none'
    } else if (this.props.letterFormVisibleOnPage){
      currentlyVisibleState= <InputLetterToGuessForm
      wordToGuess = {this.props.mainWordList} />
      button1Style.display= 'none';
      buttonText2= 'Back'
    }
    else {
      buttonText1 = 'Add a word for your opponent to guess';
      buttonText2 = 'Guess the words!';
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div style={button1Style}>
        <button onClick={this.handleClick}>{buttonText1}</button>
        </div>

        <div style={button2Style}>
        <button onClick={this.handleGuessWord}>{buttonText2}</button>
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
    wordFormVisibleOnPage: state.wordFormVisibleOnPage,
    letterFormVisibleOnPage: state.letterFormVisibleOnPage

  }
}

WordPuzzleControl = connect(mapStateToProps)(WordPuzzleControl);

export default WordPuzzleControl;