import React, { useEffect, useState, useContext } from 'react'
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {Context1} from '../App';
import { order } from '../store';
import { useDispatch, useSelector } from 'react-redux';


const Detail = (props) => {
    let {재고, shoes} = useContext(Context1);

    let [alerts, setAlerts] = useState(true);
    let [count, setCount] = useState(0);
    // let [num, setNum] = useState('');
    const [tab, setTab] = useState(0);

    // useEffect(()=>{
    // if (isNaN(num) == true){
    //     alert('그러지마세요')
    //   }
    // }, [num])

    let {id} = useParams();
    id = parseInt(id);

    const shoe = props.shoes.find(shoe => shoe.id === id);

    let state = useSelector((state) => { return state });
    let dispatch = useDispatch();
    console.log(state.cartSlice)

    return (
        <>
            <div className='main_bg'></div>
            {
                alerts === true
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
                    {/* <input type="text" onChange={ (e) => { setNum(e.target.value) } }/> */}
                    <div className="col-md-6 mt-4">
                        <h4>{shoe.title}</h4>
                        <p>{shoe.content}</p>
                        <p>{shoe.price}</p>
                        <button className="btn btn-danger"
                            onClick={() => dispatch(order({id : 6, name : shoe.title, count : 1}))}
                        >주문하기</button> 
                    </div>
                </div>
            </div>

            
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/> 
        </>
    )
}


// const TabContent = (props) => {
//     if(props.tab === 0) {
//         return <div >내용0</div>
//     } else if (props.tab === 1) {
//         return <div>내용1</div>
//     } else {
//         return <div>내용2</div>
//     }
// }

const TabContent = (props) => {
    let {재고, shoes} = useContext(Context1);
    const [fade, setFade] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setFade('end');     
        }, 100);
        return () => {
            setFade('');     
        }
    }, [props.tab])

    return(
        <div className={`start ${fade}`}>
            {[<div>{재고[1]}</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
        </div>
    )
}
export default Detail