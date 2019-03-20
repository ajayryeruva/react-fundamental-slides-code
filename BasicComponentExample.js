import React, { Component } from 'react';

class App extends Component {
  cities = ["Karachi", "Lahore", "Peshawer", "Quetta"],

  render() {
    return (
      <ul >
        cities.map((city) => <li key={city}>{city}</li>
      </ul>
    );
  }
}

export default App
