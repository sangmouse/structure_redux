import React, { Component } from "react";
import { connect } from "react-redux";

class Food_detail extends Component {
  createFoodListItems(activeFood) {
    return (
      <>
        <li> Food'name : {activeFood.name} </li>
        <li> Food'desc : {activeFood.description} </li>
      </>
    );
  }

  render() {
    const { activeFood } = this.props;
    // console.log("food", food);
    return <ul>{this.createFoodListItems(activeFood)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    activeFood: state.activeFood,
  };
}

let FoodDetailContainer = connect(mapStateToProps)(Food_detail);

export default FoodDetailContainer;
