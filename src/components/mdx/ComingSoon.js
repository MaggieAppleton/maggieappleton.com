// import { css } from '@emotion/core'
import React from 'react'
import SimpleCard from '../SimpleCard'

export const ComingSoon = () => {
  return (
    <SimpleCard
      style={{
        textAlign: 'center',
        marginTop: '2em',
        padding: '2em',
        width: '720px'
      }}
    >
      <span role="img" aria-label="seedling">🌱</span>
      <h1 style={{ fontSize: '2.8em', marginTop: '0' }}>Coming Soon</h1>
      <h5 style={{ marginBottom: '0.6em' }}>
        Feel free to bug me on twitter to finish writing this.
      </h5>
    </SimpleCard>
  )
}
