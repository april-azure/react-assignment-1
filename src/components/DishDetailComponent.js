import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

	renderDish(dish) {
		if(dish != null){
			return (
					<div className = 'col-12 col-md-5 m-1'>
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
			)
		}
	}

	renderComments(comments) {
		if(comments!= null){
			return (
				comments.map((comment, i) => {
					return (
						<ul className ='list-unstyled' key = {comment.id}>
							<li>
								<div>{comment.comment}</div>
							    <div>{`-- ${comment.author} , ${comment.date}`}</div>
							</li>
						</ul>
					)
				})		
			)
		}
	}

	render() {
		const dish = this.props.selectedDish
		if(dish == null || dish == undefined) return (<div></div>)

		return (
			<div>
				<div className = 'row'>
					{this.renderDish(dish)}
					<div className = 'col-12 col-md-5 m-1'>
					<h4>Comments</h4>
						{this.renderComments(dish.comments)}			
					</div>
				</div>
			</div>
		)
	}
}

export default DishDetail 