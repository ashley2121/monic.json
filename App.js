import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import logo from './logo.svg';
import './App.css';
import Flat from './flat';
import Marker from './marker';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: "" 
    };
  } 

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/jojojojoel/itelect/master/bebex.json"; 
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        });
      })
  }

  selectFlat = (flat) => {
    console.log(flat);
    this.setState({
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    });
  }

  render() {
    let center = {
      lat: 16.615982,
      lng: 120.3167
    }

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }

    return (
      <div className = "app">
        <div className = "main">
          <div className = "search">
            <input type = "text" 
            placeholder = "Search.."
            value = {this.state.search}
            onChange = {this.handleSearch} />
          </div>
          <div className = "flats">
            {this.state.flats.map((flat) => {
              return <Flat key = {flat.name} 
                           flat = {flat}
                           selectFlat = {this.selectFlat} />
            })}  
          </div>
        </div>
        <div className = "map">
          <GoogleMapReact
            center = {center}
            zoom = {11}
            >
            {this.state.flats.map((flat) => {
              return <Marker
              key = {flat.name}
              lat = {flat.lat} 
              lng = {flat.lng} 
              text = {flat.name}
              price = {flat.price}
              image ={flat.imageUrl}
              selected = {flat === this.state.selectedFlat} />
            })}  
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;