import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Detail from './page/Detail';
import { useState, createContext, useEffect } from 'react';
import data from './data';
import Home from './page/Home';
import Cart from './page/Cart';

export let Context1 = createContext();


function App() {
    const [shoes, setShoes] = useState(data);
    const [재고] = useState([10, 11, 12]);
    const [fade, setFade] = useState('');
    let navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            setFade('end');     
        }, 100);
        return () => {
            setFade('');     
        }
    }, [navigate])

    return (
            <div className={`App start ${fade}`}>
                <Header></Header>
                <span onClick={() => navigate('/')}>홈 </span>
                <span onClick={() => navigate('/detail')}>상세페이지 </span>
                <span onClick={() => navigate('/cart')}>장바구니 </span>
                {/* <Link to="/detail">상세페이지</Link>                 */}
                <Routes>
                    <Route path='/'  element={<Home shoes={shoes}/>}/>
                    <Route path='/detail/:id' element={
                        <Context1.Provider value={{재고, shoes}}>
                            <Detail shoes={shoes}/>
                        </Context1.Provider>
                    }/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<h1>없는 페이지 입니다.</h1>}/>
                </Routes>
            </div>
    );
}

export default App;
