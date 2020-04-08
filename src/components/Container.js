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
        box-sizing: content-box;
        width: calc(100% - 200px);
        position: relative;
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
          margin-left: 0;
          width: 100%;
        }
        ${bpMinMD} {
          margin-left: 180px;
          width: calc(100% - 280px);
        }
        ${bpMinLG} {
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
