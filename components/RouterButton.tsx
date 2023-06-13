import router from 'next/router'
import React from 'react'

const RouterButton = () => {
  return (
    <div style={{
        marginTop: '1rem', display: 'flex', gap: '5rem'
    }}>
        <button onClick={() => router.back()}>Back</button>
        <button onClick={() => router.push('/')}>Home</button>
    </div>
  )
}

export default RouterButton