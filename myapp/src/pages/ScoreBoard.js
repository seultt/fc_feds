import React, {Component} from 'react';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamA: 0,
      teamB: 0,
    }
  }

  // increaseTeam = (teamName) => {
  //   if (teamName === 'A') {
  //     this.setState({
  //     teamA: this.state.teamA +1,
  //     })
  //   } else if (teamName === 'B') {
  //     this.setState({
  //       teamA: this.state.teamA +1,
  //     })
  //   }
  // }

  increaseTeam = (teamName) => {
    let updatedState = this.state;
    // Object A
    // A.key A[key]

    updatedState [teamName] = updatedState[teamName] +1;

    this.setState({
      ...updatedState,
    })
  }
  decreaseTeam = (teamName) => {
    let updatedState = this.state;
    // Object A
    // A.key A[key]

    updatedState [teamName] = updatedState[teamName] -1;

    this.setState({
      ...updatedState,
    })
  }


  render = () => {
    return (
      <div>
        <div>
          <h1>Team A</h1>
          <div
            style= {{
              color: this.state.teamA > this.state.teamB ? 'blue' : 'red',
            }}
          >{this.state.teamA}</div>
          <button class="ui button"
          onClick={() => this.increaseTeam('teamA')}
          >
            +1 Point
          </button>
          <button class="ui button"
          onClick={() => this.decreaseTeam('teamA')}
          >
            minus
          </button>
        </div>
        <div>
          <h1>Team B</h1>
          <div
            style= {{
              color: this.state.teamB > this.state.teamA ? 'blue' : 'red',
            }}
          >{this.state.teamB}</div>
          <button class="ui button"
          onClick={() => this.increaseTeam('teamB')}
          >
            plus
          </button>
          <button class="ui button"
          onClick={() => this.decreaseTeam('teamB')}
          >
            minus
          </button>
        </div>
      </div>
    )
  }
}

export default ScoreBoard;