import React, { Component } from 'react';

// Component
// jsx => html
// jsx 입력  // html 출력
// parameter => menuLabel
// <img src="" />
// this.props

const menuItems = [
  {
    label: 'Vocablist',
    linkTo: '/vocablist',
  },
  {
    label: 'Vocablist',
    linkTo: '/vocablist',
  },
  {
    label: 'Vocablist',
    linkTo: '/vocablist',
  }
];



class HeaderItem extends React.Component {
  render = () => {
    return (
      <a className="item"
        href={this.props.linkTo}
      >
        {this.props.menuLabel}
        {this.props.children}
      </a>
    );
  }
}

class Header extends React.Component {
  render = () => {
    return (
      <div className="ui menu">
        <div className="ui container">
          <div className="header item">Our Company</div>
          {menuItems.map((menuItem) => {
            return(
            <HeaderItem 
              menuLabel={menuItem.label}
              linkTo={menuItem.linkTo}
            >
              <div>I am your child!</div>
            </HeaderItem>

            )
          })}
        </div>
      </div>
    );
  }
}
export default Header;