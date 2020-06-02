import React from 'react'
import { css } from '@emotion/core'
import { Image } from './ImageStyles'
import { bpMaxSM } from '../../lib/breakpoints'

const EggheadCourseCard = props => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.url}>
      <div
        css={css({
          display: 'flex',
          justifySelf: 'center',
          maxWidth: '440px',
          flexDirection: 'column',
          margin: '0 auto',
          padding: '30px 20px',
          maxHeight: '520px',
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
            alignSelf: 'center',
            margin: '0 auto',
          },
          p: {
            marginTop: '1.4em',
            marginBottom: '1em',
            textAlign: 'center',
            fontSize: '1.1em',
            lineHeight: '1.2em',
            color: '#08293C',
          },
        })}
      >
        <Image alt={props.title} src={props.image} />
        <p>{props.title}</p>
      </div>
    </a>
  )
}

export default EggheadCourseCard
