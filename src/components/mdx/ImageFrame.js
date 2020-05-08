import React from 'react'
import { css } from '@emotion/core'

const ImageFrame = props => {
  return (
    <div
      css={css({
        marginBottom: '1.6em',
        marginTop: '1.6em',
        boxShadow: '0px 2px 3px rgba(152, 151, 158, 0.1)',
        img: {
          maxWidth: '960px',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export default ImageFrame
