import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM, bpMinMD } from 'lib/breakpoints'

const Container = props => {
  const {
    maxWidth = 1200,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '40'}px;
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
        ${bpMinMD} {
          margin-left: 200px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
