import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Route/PrivateRoute';


/** 1. 전체 상품 페이지, 로그인 페이지, 상품상세 페이지 
 *  2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
 *  3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
 *  4. 상품 디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 나온다.
 *  5. 로그인이 되어있을경우에는 상품 디테일 페이지를 볼 수 있다.
 *  6. 로그아웃 버튼을 누르면 로그아웃이 되고 상품 디테일 페이지를 못보고 로그인 페이지가 나온다.
 *  7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
 *  8. 상품을 검색할 수 있다.
*/

function App() {
  let [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}
export default App;
