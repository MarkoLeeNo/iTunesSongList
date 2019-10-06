import React, { Component } from "react";
import axios from "axios";

import { search } from "./utils";
import { setPageTitle } from "./utils";
import Songs from "./Songs";
import classes from "./Song.module.css";

class App extends Component {

  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    var searchText = "Vasco Rossi";
    this.search(searchText);
    setPageTitle(searchText);
    this.nameInput.focus();
    this.nameInput.select();  
  }

  state = {
    songs: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `/search?term=${val}&limit=50`
    );
    const songs = results;
    if(songs.length > 0){
      setPageTitle(songs[0].artistName);
    }
    this.setState({ songs, loading: false });
    this.nameInput.focus(); 
    this.nameInput.select(); 
  };

  onChangeHandler = async e => {
    this.setState({ value: e.target.value });
  };

  onSearchHandler = async e => {
    var searchText = this.state.value;
    this.search(searchText);
    this.setState({ value: searchText });
  };

  get renderSongs() {
    let songs = <h1>No results found.</h1>;
    if (this.state.songs) {
      songs = <Songs list={this.state.songs} />;
    }

    return songs;
  }

  render() {  
    return (
      <div>
      <h1 className={classes.SearchContainer}>iTunes song list React App</h1>
      <div className={classes.SearchContainer}>
        <input
          ref={(input) => { this.nameInput = input; }} 
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Vasco Rossi"
        />
        <input         
        type="button" 
        value="Search" 
        onClick={e => this.onSearchHandler(e)} />      
      </div>
      <br>
      </br>
      <hr></hr>
      <div>
        {this.renderSongs}  
      </div>
      </div>
    );
  }
}

export default App;