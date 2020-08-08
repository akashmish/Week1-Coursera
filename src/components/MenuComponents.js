import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Commies from './components/DishDetails'

class Menu extends Component{

    constructor(props)
    {
        super(props);

        this.state={
          selectedDish: null
        }
    }

    onDishSelect(dish){
      this.setState({selectedDish:dish})
    }
    renderDish(dish){
      if(dish!=null)
      {
        return(
        <div className="col-12 col-md-5 m-1">
         <Card>
         <CardImg  width="100%"  src={dish.image} alt={dish.name} />
         <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
         </CardBody>
        </Card>
        <Commies selectedDish={this.state.dish}/>

        </div>
        );
      }
    }
    // renderComments(dish){
    //   if(dish!=null)
    //   {
      
    //     const comment =dish.comments.map((com)=>{
    //       return(
    //         <div >
    //           <p className="mb=5px">{com.comment}</p>
    //           <div className="akash">
    //            -- {com.author} , {com.date}
    //            <br></br>
    //           </div>
              
    //         </div>
    //       );
    //     });
    //     return (
    //       <div className="col-12 col-md-5 m-1">
    //         <card>
    //           <h1>Comments</h1>
    //          {comment}
    //         </card>
    //       </div>

    //     );

        
    //   }
    // }
    
      
    render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

    return (
      <div className="container">
        <div className="row">
              {menu}  
        </div>
        <div class="row">
        {this.renderDish(this.state.selectedDish)}
        {/* {this.renderComments(this.state.selectedDish)} */}
        </div>
      </div>
    );
}
   
}


export default Menu;