import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from '../components/card.jsx';
import {SearchBox} from '../components/search-box.jsx';

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

  handleChange = (e) => {
        this.setState({searchField: e.target.value})
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
                handleChange={ e => this.handleChange(e)}/>
             <Card monsters={filteredMonsters}/>
        </div>
    )
  }
}

export default Index;