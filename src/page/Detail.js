import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Detail = (props) => {
    let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAlert(false)
        }, 2000);

        return () => {
            code~~~
        }
    }, [count])



    let {id} = useParams();
    id = parseInt(id);

    const shoe = props.shoes.find(shoe => shoe.id === id);

    return (
        <>
            <div className='main_bg'></div>
            {
                alert === true
                ? <div style={{background:"yellow"}}>2초후에 사라짐</div>
                : null
            }
            <div>{count}</div>
            <button onClick={() => setCount(count +1)}>button</button>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={shoe.img} width="80%" alt={shoe.title} /> 
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4>{shoe.title}</h4>
                        <p>{shoe.content}</p>
                        <p>{shoe.price}</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail