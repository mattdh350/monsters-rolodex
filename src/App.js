import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: ''
    };
  }
  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    this.setState({ monsters: users });  
  }

  handleChange = e => this.setState({searchValue: e.target.value});

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList cards={filteredMonsters} />
      </div>
    );
  }
}

export default App;
