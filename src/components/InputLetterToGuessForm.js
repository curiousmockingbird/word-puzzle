import React from 'react';
import PropTypes from 'prop-types';

function InputLetterToGuessForm(props){
  function handleProceedingToPlaySubmission(event){
    event.preventDefault();
    props.onLetterCheck({
      letter: event.target.letter.value
    })
  }
  return(
    <React.Fragment>
      <h6>Your time to solve the word puzzle:</h6>
      {Object.values(props.wordToGuess).map((randomWord) =>
      <h4>This words has {randomWord.length} letters.</h4>
      )}
      <form onSubmit={handleProceedingToPlaySubmission}>
        <input
        type='text'
        name='letter'
        placeholder='Enter a letter' /><br></br>
        <button type='submit'>Check letter</button>
      </form>
    </React.Fragment>
  )
}
InputLetterToGuessForm.propTypes = {
  onLetterCheck: PropTypes.func,
  wordToGuess: PropTypes.object
}

export default InputLetterToGuessForm;