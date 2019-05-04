import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Accordion preview="Aloha">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia odio perspiciatis fuga alias aut animi optio et ullam? Voluptatum vitae quidem iste asperiores sequi distinctio ex? Suscipit quod odit laborum, delectus ipsum nostrum, esse nihil accusamus aliquam blanditiis eos obcaecati iure alias cupiditate minus mollitia id, voluptas libero recusandae.

          </Accordion>
        </header>
      </div>
    );
  }
}

export default App;
