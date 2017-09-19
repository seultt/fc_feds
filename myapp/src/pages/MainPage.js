import React, {Component} from 'react';

const listItems = [
  {
    title: 'Elliot Fu',
    paragraph: 'Elliot Fu is a film-maker from New York.',
    add: 'Add Friend'
  },
  {
    title: 'Elliot Fu',
    paragraph: 'Elliot Fu is a film-maker from New York.',
    add: 'Add Friend'
  },
]

class ListCardItem extends React.Component {
  
  render = () => {
    return (
        <div className="card">
          <div className="content">
            <div className="header">{this.props.title}</div>
            <div className="description">
              {this.props.paragraph}
            </div>
          </div>
          <div className="ui bottom attached button" onClick={() => window.location.pathname = '/ScoreBoard'}>
            <i className="add icon"></i>
            {this.props.add}
          </div>
        </div>
    );
  }
}

class MainPage extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Words List</h1>
        <div className="ui cards">
          {listItems.map((listItem) => {
            return(
             <ListCardItem
              title = {listItem.title}
              paragraph = {listItem.paragraph}
              add = {listItem.add}
             > 
             </ListCardItem> 
            )
          })}
        </div>
      </div>
    );
  }
}

export default MainPage;