import React, { Component } from 'react';

class Commies extends Component{

    constructor(props)
    {
        super(props);
  
    }
    render(){
    const comment= this.props.selectedDish.map((com) => {

        return (
            <div  className="col-12 col-md-5 m-1">

                <p className="mb=5px">{com.comment}</p>
                 <div >
                   -- {com.author} , {com.date}
                </div>
            </div>
        );

    });

    return <h1>wowowowo</h1>

  
}
}
export default Commies;