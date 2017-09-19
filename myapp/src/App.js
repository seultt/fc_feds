import React, { Component } from 'react';
import './App.css';
import 'semantic-ui/dist/semantic.css';
import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import QuizComponent from './pages/QuizComponent';
import WordsLists from './pages/WordsLists';
import ScoreBoard from './pages/ScoreBoard';
import Header from './components/Header';






class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // window.location.pathname = '/quizes'
  }

  render() {
    const pageToRender = () => {
      if (window.location.pathname === '/quizes') {
        return <QuizPage />
      } else if (window.location.pathname === '/mainpage') {
        return <MainPage />
      } else if (window.location.pathname === '/ScoreBoard') {
        return <ScoreBoard />
      } else {
        return <div> Page not found </div>
      }
    }
    return ( 
      <div>
        <Header />
        <div className="ui container">
          
          {pageToRender()}
          {/*<QuizComponent />
          <ScoreBoard />
          <MainPage />
          <WordsLists />
          <QuizPage />*/}
        </div>
      </div> 
    );
  }
}

export default App;