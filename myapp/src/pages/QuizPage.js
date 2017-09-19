import React, {Component} from 'react';

const quizItems = [
  {
    name: 'TOIEC',
    words: '1234words',
    takeQuiz: 'Take Quiz'
  },
  {
    name: 'TOFFLE',
    words: '1234words',
    takeQuiz: 'Take Quiz'
  },
  {
    name: 'TOIEC',
    words: '1234words',
    takeQuiz: 'Take Quiz'
  },
]
class QuizCardItem extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="content">
          <div className="header">{this.props.name}</div>
          <div className="description">
            {this.props.words}
          </div>
        </div>
        <div className="ui bottom attached button">
          <i className="add icon"></i>
          {this.props.takeQuiz}
        </div>
      </div>
    )
  }
}

class QuizPage extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Test Yourself</h1>
        <div className="ui cards">
          {quizItems.map((quizItem) => {
            return(
              <QuizCardItem
                name = {quizItem.name}
                words = {quizItem.words}
                takeQuiz = {quizItem.takeQuiz}
              >     
              </QuizCardItem>
            )
          })}
        </div>
      </div>
    );
  }
}


export default QuizPage;