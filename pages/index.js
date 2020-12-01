import React from 'react';
import Card from './components/card.js';

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}))
  }

  render() {
    return (
        <div className="Index">
          <Card monsters={this.state.monsters}/>
        </div>
    )
  }

}

export default Index;