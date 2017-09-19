import React, { Component } from 'react';

export default class QuizComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside constructoring");
  }
  componentWillMount = () => {
    console.log("I will mount soon");
  }
  componentDidMount = () => {
    console.log("I will Jsut mounted");
  }
  componentWillUnMount = () => {
    console.log("I will soon be unmounted");
  }

  render = () => {
    console.log("I have just rendered");
    return (
      <div>
      </div>
      );
  }
}