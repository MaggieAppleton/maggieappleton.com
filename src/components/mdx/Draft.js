// import { css } from '@emotion/core'
import React from 'react'
import SimpleCard from '../SimpleCard'

export const Draft = () => {
  return (
    <SimpleCard
      style={{
        textAlign: 'center',
        marginTop: '2em',
        maxWidth: '660px',
        padding: '2em',
      }}
    >
      <span style={{ fontSize: '2.8em', marginTop: '0' }} role="img" aria-label="seedling">☢️</span>
      <h1 style={{ fontSize: '2.8em', marginTop: '0' }}>Draft in Progress</h1>
      <h5 style={{ marginBottom: '0.6em' }}>
        The quality of writing below this point is haphazard, disjointed, and possibly nonsensical. It's probably a good idea to come back later.
      </h5>
    </SimpleCard>
  )
}