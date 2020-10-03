import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {selectFood} from './../actions/index'

class Food_list extends Component {

  createFoodListItems (food) {
    //   console.log('food', food)
    const list = food.map((item, index) => {
        // console.log('item', item)
      return <li key={index} onClick = {
        () => this.props.selectFood(item)
      }> Food'name : {item.name} </li>;
    });
    return list;
  }

  render() {
    const { food } = this.props;
    // console.log("food", food);
    return <ul>{this.createFoodListItems(food)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    food: state.food,
  };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectFood : selectFood}, dispatch)
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(Food_list);

export default FoodContainer;
