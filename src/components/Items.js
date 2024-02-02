import React from 'react'

const Items = (props) => {

    return (
        <div className="col-md-4">
            <img src={props.shoes.img} width="80%" alt={props.shoes.title} />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
            <button className="btn btn-danger">주문하기</button> 
        </div>
    )
}

export default Items