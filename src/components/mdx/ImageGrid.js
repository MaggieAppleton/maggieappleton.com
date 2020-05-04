import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM } from '../../lib/breakpoints'

const ImageGrid = props => {
  return (
    <>
      <div
        css={css({
          [bpMinSM]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          gridTemplateColumns: 'repeat(1, 1fr)',
          display: 'grid',
          gridGap: '20px',
          img: {
            maxWidth: '100%',
            gridAutoFlow: 'row',
          },
        })}
      >
        {props.children}
      </div>
    </>
  )
}

export default ImageGrid
