import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM, bpMinXL, bpMinLG, bpMaxSM } from 'lib/breakpoints'

const Container = props => {
  const {
    maxWidth = 1500,
    marginLeft = 190,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '60'}px;
        ${bpMinLG} {
          margin-left: ${marginLeft}px;
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
        ${bpMinXL} {
          margin-left: ${marginLeft + 40}px;
        }
        margin-left: 0;
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
