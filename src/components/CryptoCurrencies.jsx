import React, {useState, useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const CryptoCurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: crypoList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearhTerm] = useState('')

  useEffect(() => {
    const filteredData = crypoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData)
  }, [searchTerm])


  if(isFetching) return 'Loading...'

  return ( 
    <>
    { !simplified ?
    <div className='search-crypto'>
      <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearhTerm(e.target.value)} />
    </div> : ''
    }
     <Row gutter={[32, 32]} className='crypto-card-container' >
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
           <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card
                 title={`${currency.rank}. ${currency.name}`}
                 extra={<img className='crypto-image' src={currency.iconUrl} />}  
                 hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market: {millify(currency.marketCap)}</p>
                  <p>Price: {millify(currency.change)}</p>
                </Card>
           </Link>
        </Col>
      ))}
     </Row>
    </>

  )
}

export default CryptoCurrencies
