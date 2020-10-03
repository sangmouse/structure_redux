import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodContainer from './../containers/food_list' 
import FoodDetailContainer from './../containers/food_detail' 



function App() {
  return (
    <div className="App">
     <FoodContainer />
     <FoodDetailContainer />
    </div>
  );
}

export default App;
