import Price from './price.jsx';
import App from './App.jsx';    
import React from 'react';
import './App.css';




export default function Activity({title, idx}) {

  
  let description = ["This is a product activity", "This is another activity", "This is a third activity","This is a fourth activity"];
  let oldPrice = ["$20", "$30", "$40", "$50"];
  let newPrice = ["$25", "$35", "$45", "$55"];
  return (
    <div className="activity">
      <p>Description: {description[idx]}</p>
      <p>{title}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} /> 
    </div>
  );
}