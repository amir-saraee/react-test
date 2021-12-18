import React, { useState, useEffect } from 'react'

function Crypto() {
  const [coins, setCoins] = useState({
    BTC: null,
    ETH: null,
    TRX: null
  })

  useEffect(() => {
    const ws = new WebSocket(
      'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tron'
    )

    ws.onmessage = function (event) {
      const data = JSON.parse(event.data)
      if (data.bitcoin) {
        setCoins((prev) => ({ ...prev, BTC: data['bitcoin'] }))
      }
      if (data.ethereum) {
        setCoins((prev) => ({ ...prev, ETH: data['ethereum'] }))
      }
      if (data.tron) {
        setCoins((prev) => ({ ...prev, TRX: data['tron'] }))
      }
    }
  }, [])

  return (
    <div>
      <div>
        <span>Bitcoin: {coins.BTC}</span>
      </div>
      <div>
        <span>Ethereum: {coins.ETH}</span>
      </div>
      <div>
        <span>TRX: {coins.TRX}</span>
      </div>
    </div>
  )
}

export default Crypto
