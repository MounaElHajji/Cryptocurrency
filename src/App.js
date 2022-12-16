import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import Navbar from './components/Navbar';
import News from './components/News'
import Exchanges from './components/Exchanges'
import CryptoCurrencies from './components/CryptoCurrencies'
import CryptoDetails from './components/CryptoDetails'
import HomePage from './components/HomePage'
function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
             <div className='routes'>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route exact path="/cryptoCurrencies" element={<CryptoCurrencies />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              </Routes>
             </div>
          </Layout>
        </div>
        <div className='footer'>
          <Typography.Title>
               CryptoVerse
          </Typography.Title>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
