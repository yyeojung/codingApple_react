import React from 'react'
import Items from '../components/Items';

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
            </div>
        </>
    )
}

export default Home