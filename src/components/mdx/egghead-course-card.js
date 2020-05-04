import React from 'react'
import { css } from '@emotion/core'

const EggheadCourseCard = props => {
  return (
    <a target='_blank' rel='noopener noreferrer' href={props.url}>
      <div
        css={css({
          padding: '30px 20px',
          maxHeight: '500px',
          border: '1px solid #E7EEF3',
          borderRadius: '6px',
          boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
          ':hover': {
            transition: 'all 400ms ease',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            p: {
              color: '#13B0D1',
              transition: 'all 400ms ease',
            },
          },
          img: {
            maxWidth: '95%',
            maxHeight: '80%',
          },
          p: {
            textAlign: 'center',
            fontSize: '1.1em',
            lineHeight: '1.2em',
            color: '#08293C',
          },
        })}>
        <img alt={props.title} src={props.image} />
        <p>{props.title}</p>
      </div>
    </a>
  )
}

export default EggheadCourseCard
