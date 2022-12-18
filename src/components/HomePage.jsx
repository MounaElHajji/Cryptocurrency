import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import CryptoCurrencies from '../components/CryptoCurrencies'
import News from '../components/News'
const {Title} = Typography

const HomePage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats


  if(isFetching) return 'Loading...'

  return (
    <>
   
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Toal Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Toal Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Toal Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Toal 24 Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Toal Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={2} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={2} className='show-more'><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage
