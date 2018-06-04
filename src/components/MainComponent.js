import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES, 
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className = 'container'>
            <NavbarBrand href='/'> Test </NavbarBrand>
          </div>
        </Navbar>
        <Menu onClick = { (dishId) => this.onDishSelect(dishId) } dishes = { this.state.dishes }/>
        <DishDetail selectedDish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}/>
      </div>
    );
  }
}

export default Main;
