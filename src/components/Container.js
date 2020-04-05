import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM, bpMinMD, bpMinLG, bpMaxSM } from 'lib/breakpoints'

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
        width: 72vw;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '60'}px;
        ${bpMinSM} {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
          margin-left: 0;
        }
        ${bpMaxSM} {
          width: 98vw;
        }
        ${bpMinMD} {
          margin-left: 190px;
        }
        ${bpMinLG} {
          margin-left: 260px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
