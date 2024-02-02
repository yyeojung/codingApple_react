import React, { useState } from 'react'
import Items from '../components/Items';
import axios from 'axios';
import { Nav } from 'react-bootstrap';

const Home = (props) => {
    return (
        <>
            <div className='main_bg'></div>
            <div className='container'>
                <div className="row">
                        {
                            props.shoes.map((shoe, index) => (
                                <Items
                                    key={index}
                                    shoes={props.shoes[index]}
                                />
                            ))
                        }
                </div>
                <button onClick={() => {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                        let items = [...props.shoes, ...result.data];
                        console.log(items);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }}>button</button>
            </div>
        </>
    )
}

export default Home