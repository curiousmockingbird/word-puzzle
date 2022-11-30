import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddWordsToGuessForm(props){
  function handleNewWordSubmission(event){
    event.preventDefault();
    props.onNewWordCreation({
      word: event.target.word.value,
      length: event.target.word.value.length,
      id: v4()
    });
  }

  //Move this function (and it's associated form-button on Lines 31-33) to a separate component file tomorrow.  -SM, 11/30/22, 3:40pm PST. 
  function handleProceedingToPlaySubmission(){

  }
  
  return(
    <React.Fragment>
      <h5>Enter a word for the other player to guess:</h5>
      <form onSubmit={handleNewWordSubmission}>
        <input
        type='text'
        name='word'
        placeholder='Enter a word' /><br></br>
        <button type='submit'>Add words</button>
      </form>

      <form onSubmit={handleProceedingToPlaySubmission}>
        <button type='submit'>Guess words</button>
      </form>
    </React.Fragment>
  );
}
AddWordsToGuessForm.propTypes = {
  onNewWordCreation: PropTypes.func
}
 export default AddWordsToGuessForm;