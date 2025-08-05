import App from './App.jsx';
import React from 'react';
import Activity from './activity.jsx';

export default function Price({ oldPrice, newPrice }) {
 let styles ={textDecoration:"line-through", color: "red"};
    return (
    <div>
      <p style={styles}>Old price: {oldPrice}</p>
      <p>New price: {newPrice}</p>
    </div>
  );
}
