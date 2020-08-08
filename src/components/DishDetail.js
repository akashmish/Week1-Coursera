import React, { component } from 'react';

class dishDetail extends component{

    constructor(props)
    {
        super(props);
  
    }

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

  
}

export default dishDetail;