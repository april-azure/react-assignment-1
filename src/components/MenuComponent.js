import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import DishDetail from './DishDetailComponent'

class Menu extends Component{

	constructor (props) {
		super(props)
		this.state = {
			selectedDish: null
		}
	}

	onDishSelect(dish) {
		this.setState({
			selectedDish: dish
		})
	}

	renderDishDetail(dish){
		return (
			<DishDetail selectedDish = {dish}/>
		)
	}

	render() {
		const dishes = this.props.dishes
		const menu = dishes.map((dish) => {
			return (
				<div key = {dish.id} className = 'col-12 col-md-5 m-1'>
					<Card onClick = {()=> this.onDishSelect(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}/>
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
						
					</Card>
				</div>
			)
		})

		return (
			<div className = 'container'>
				<div className = 'row'>
					{menu}
				</div>
				{this.renderDishDetail(this.state.selectedDish)}
			</div>
		)
	}
}

export default Menu 