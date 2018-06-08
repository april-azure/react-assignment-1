import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, 
		 CardText, CardBody, CardTitle, 
		 Breadcrumb, BreadcrumbItem, Button,
		 Modal, ModalHeader
	   } from 'reactstrap'
import { Link } from 'react-router-dom'


function RenderDish({dish}) {
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


function RenderComments({comments}) {
		if(comments!= null){
			return (
				<div className = 'col-12 col-md-5 m-1'>
				{
					comments.map((comment, i) => {
						return (
							<ul className ='list-unstyled' key = {comment.id}>
								<li>
									<div>{comment.comment}</div>
								    <div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}`}</div>
								</li>
							</ul>
						)
					})					
				}
				<CommentForm/>
				</div>
		
			)
		}
	}



const DishDetail = (props) => {
		const dish = props.dish
		const comments = props.comments
		if(dish === null || dish === undefined) return (<div></div>)

		return (
			<div className ='container' >
				<div className = 'row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/home'>Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<Link to='/menu'>Menu</Link>
						</BreadcrumbItem>						
						<BreadcrumbItem active>
							{dish.name}
						</BreadcrumbItem>
					</Breadcrumb>
			    </div>
			    <div className = 'container'>
			    	<div className = 'row'>
						<RenderDish dish = {dish} />
						<RenderComments comments = {comments} />			    	
			    	</div>
				</div>
			</div>
		)
	}




class CommentForm extends Component {
	
	constructor (props) {
		super (props)
		this.state = {
			isModalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.handleAddComment = this.handleAddComment.bind(this)
	}

	toggleModal () {
		this.setState ({
			isModalOpen: !this.state.isModalOpen
		})
	}

	handleAddComment () {

	}

	render(){
		return (
			<div>
				<Button outline onClick = {this.handleAddComment}><span className = 'fa fa-pencil fa-lg'></span> Add Comment</Button>
				<Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
					<ModalHeader toggle = {this.toggleModal} ></ModalHeader>
				</Modal>
			</div>
		)
	}
}


export default DishDetail 