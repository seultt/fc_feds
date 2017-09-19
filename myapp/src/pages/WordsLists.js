import React, {Component} from 'react';

class WordsLists extends Component {
  render = () => {
    return (
      <div className="ui divided items">
        <h2 className="ui header">GRE Words
          <div className="sub header">1234 words</div>
        </h2 >
        <div className="item">
          <div className="content">
            <a className="header">12 Years a Slave</a>
            <div className="meta">
              <span className="cinema">Union Square 14</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              <div className="ui label">IMAX</div>
              <div className="ui label"><i className="globe icon"></i> Additional Languages</div>
            </div>
          </div>
        </div>     
        <div className="item">
          <div className="content">
            <a className="header">12 Years a Slave</a>
            <div className="meta">
              <span className="cinema">Union Square 14</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              <div className="ui label">IMAX</div>
              <div className="ui label"><i className="globe icon"></i> Additional Languages</div>
            </div>
          </div>
        </div>     
      </div>
    )
  }
}

export default WordsLists;