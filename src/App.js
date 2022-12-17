import './App.css';
import {  Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import Navbar from './components/Navbar';
import News from './components/News'
import Exchanges from './components/Exchanges'
import CryptoCurrencies from './components/CryptoCurrencies'
import CryptoDetails from './components/CryptoDetails'
import HomePage from './components/HomePage'
function App() {

  return (
    
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
        
          <div className='footer' >
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                CryptoVerse <br />
                All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
  );
}

export default App;
