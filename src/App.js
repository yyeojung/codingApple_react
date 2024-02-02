import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Detail from './page/Detail';
import { useState } from 'react';
import data from './data';
import Home from './page/Home';

function App() {
    const [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    

    return (
            <div className="App">
                <Header></Header>
                <span onClick={() => navigate('/')}>홈 </span>
                <Link to="/detail">상세페이지</Link>                
                <Routes>
                    <Route path='/' element={<Home shoes={shoes}/>}/>
                    <Route path='/detail/:id' element=<Detail shoes={shoes}/>/>
                    <Route path='*' element={<h1>없는 페이지 입니다.</h1>}/>
                </Routes>
            </div>
    );
}

export default App;
