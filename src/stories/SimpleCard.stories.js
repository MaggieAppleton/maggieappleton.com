import React from 'react'
import SimpleCard from '../components/SimpleCard'

export default {
  title: 'Simple Card',
}

export const Width600 = () => (
  <SimpleCard width="600px">
    <h2>I am an h2</h2>
    <p>Does this look as you'd expect it to?</p>
  </SimpleCard>
)
