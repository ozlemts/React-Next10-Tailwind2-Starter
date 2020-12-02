import React from 'react';
import {Card} from './components/card.js';
import {SearchBox} from './components/search-box.js';

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}))
  }

  render() {
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(e =>
        e.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
        <div className="index min-h-screen flex flex-col items-center bg-red-400 ">
            <SearchBox
                placeholder="Search Cats..."
                handleChange={ e=> this.setState({searchField: e.target.value})}/>
             <Card monsters={filteredMonsters}/>
        </div>
    )
  }

}

export default Index;