import React from 'react'
import { bpMinMD } from '../../../src/lib/breakpoints'
import { css } from '@emotion/core'

const Feature = props => {
  return (
    <span
      css={css({
        gridColumn: '1/4',
        [bpMinMD]: {
        },
        marginTop: '60px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        img: {
          maxWidth: '500px',
          borderRadius: '5px',
        },
        h5: {
          fontWeight: 'bold',
          maxWidth: '400px',
        },
        h4: {
          fontSize: '1.4em',
          maxWidth: '400px',
        },
        p: {
          maxWidth: '400px',
          paddingRight: '1.8em'
        }
      })}
    >
      <div>
        <h5>{props.illustrator}</h5>
        <a href={props.sourceURL}>
          <h4>{props.sourceTitle}</h4>
        </a>
        <p>{props.children}</p>
      </div>
      <img alt={props.sourceTitle} src={props.imageURL} />
    </span>
  )
}

export default Feature
