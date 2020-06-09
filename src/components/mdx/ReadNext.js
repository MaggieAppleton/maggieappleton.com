import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const ReadNext = props => {
  return (
    <div
      css={css({
        textAlign: 'center',
        margin: '50px auto',
        h2: {
          borderTop: '1px solid #798C9F',
          paddingTop: '26px',
          margin: '0 auto',
          width: '220px',
        },
        p: {
          marginTop: '6px',
        },
      })}
    >
      <Link to="/drawinginvisibles1">
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
    </div>
  )
}

export default ReadNext
