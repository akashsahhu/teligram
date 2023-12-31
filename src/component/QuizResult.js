import React from 'react'
import questions from './Quizdata'

const QuizResult = (props) => {
  return (
    <div className='score-section'>
        <h2>Completed!</h2> 
         <h4>Total Score {props.score}/20</h4> 
         <h4>your correct question {props.correctAns}  out of {questions.length}</h4>
        <button onClick={props.handlePlayAgain}>Play again</button>
    </div>
  );
};

export default QuizResult