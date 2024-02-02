import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Detail = (props) => {
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
                        <button className="btn btn-danger">주문하기</button> 
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


const TabContent = (props) => {
    if(props.tab === 0) {
        return <div>내용0</div>
    } else if (props.tab === 1) {
        return <div>내용1</div>
    } else {
        return <div>내용2</div>
    }
}
export default Detail