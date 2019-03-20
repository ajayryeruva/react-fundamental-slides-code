// JSX in React Example code


import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1> Hello World </h1>

console.log(element)

ReactDOM.render(
    element,
    document.getElementById('root')
)


//****************************************************
// run one at a time

/*
import React from 'react';
import ReactDOM from 'react-dom';

const cities = [
    "Karachi",
    "Lahore",
    "Peshawer",
    "Quetta"
]

const element = <ol>
    {
        cities.map(city => <li> {city} </li>
  }
</ol>

console.log(element)

ReactDOM.render(
    element,
    document.getElementById('root')
)
*/
