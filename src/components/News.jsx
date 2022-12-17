import React from 'react'
import {Select, Typography, Avatar, Row, Col, Card} from 'antd'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title} = Typography;
const {Option} = Select

const News = ({simplified}) => {

  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})
  
  if(!cryptoNews?.value) return 'Loading...'
  console.log(cryptoNews); 

  return (
    <Row gutter={[24, 24]}>
      
    </Row>
  )
}

export default News
 