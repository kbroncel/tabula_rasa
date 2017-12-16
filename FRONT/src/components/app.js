import React, { Component } from 'react';
import RandomNumberBtn from "../containers/randomNumberBtn.js";
import RandomNumber from "../containers/randomNumber.js";


export default class App extends Component {
  render() {
    return (
      <div>
        <RandomNumberBtn/>
        <RandomNumber/>
      </div>
    );
  }
}
