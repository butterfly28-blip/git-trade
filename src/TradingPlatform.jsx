import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const TradingPlatform = () => {
  const [data, setData] = useState([
    { time: '00:00', price: 45230, volume: 1200 },
    { time: '04:00', price: 45890, volume: 1500 },
    { time: '08:00', price: 44560, volume: 1100 },
    { time: '12:00', price: 46120, volume: 1800 },
    { time: '16:00', price: 45670, volume: 1400 },
    { time: '20:00', price: 47230, volume: 2000 },
  ])
  const [balance, setBalance] = useState(10000)
  const [portfolio, setPortfolio] = useState(0)
  const [btcPrice, setBtcPrice] = useState(47230)

  const handleBuy = () => {
    if (balance >= btcPrice) {
      setBalance(balance - btcPrice)
      setPortfolio(portfolio + 1)
    }
  }

  const handleSell = () => {
    if (portfolio > 0) {
      setBalance(balance + btcPrice)
      setPortfolio(portfolio - 1)
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🚀 AI Trading Platform</h1>
        <p>Real-time Cryptocurrency Trading</p>
      </header>

      <div style={styles.dashboard}>
        <div style={styles.stats}>
          <div style={styles.card}>
            <h3>Bitcoin Price</h3>
            <p style={styles.price}>${btcPrice.toLocaleString()}</p>
            <span style={styles.change}>↑ 2.5%</span>
          </div>
          <div style={styles.card}>
            <h3>Your Balance</h3>
            <p style={styles.balance}>${balance.toLocaleString()}</p>
          </div>
          <div style={styles.card}>
            <h3>Holdings</h3>
            <p style={styles.holdings}>{portfolio} BTC</p>
          </div>
        </div>

        <div style={styles.chart}>
          <h3>Price Chart (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.controls}>
          <button style={styles.buyBtn} onClick={handleBuy}>💰 Buy BTC</button>
          <button style={styles.sellBtn} onClick={handleSell}>📊 Sell BTC</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#f1f5f9',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  dashboard: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  },
  price: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#3b82f6',
    margin: '10px 0',
  },
  balance: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#22c55e',
    margin: '10px 0',
  },
  holdings: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#f59e0b',
    margin: '10px 0',
  },
  change: {
    color: '#22c55e',
    fontSize: '14px',
  },
  chart: {
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '30px',
  },
  controls: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  buyBtn: {
    background: '#22c55e',
    color: '#0f172a',
    border: 'none',
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  sellBtn: {
    background: '#ef4444',
    color: '#fff',
    border: 'none',
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
}

export default TradingPlatform