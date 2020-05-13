import React from 'react'
import { css } from '@emotion/core'
import { bpMinLG, bpMaxSM } from 'lib/breakpoints'

const Container = props => {
  const {
    maxWidth = 1150,
    // marginLeft = 210,
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
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
