// import logo from './logo.svg';
import React from 'react'
import "./scss/app.scss";
import Header from './components/Header';
// import List from './List';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import { Route, Routes, } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </div>
      </div>
    </div>
    // <div className='App'>
    //   <button onClick={toggleVisibleList}>Показать / Скрыть </button>
    //   {visibleList && <List />}
    // </div>
  );
}

export default App;
