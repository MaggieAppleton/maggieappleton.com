import * as React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../../lib/breakpoints'

export function HackyFormatting() {
  return (
    <div css={css`position: relative; top: 0; left: 0; height: 400px; width: 100%;`}>
      <div css={css`position: absolute; top: 30px; left: 30px;`}>Unless</div>
      <div css={css`position: absolute; top: 80px; left: 100px;`}>you</div>
      <div css={css`position: absolute; top: 100px; left: 150px;`}>want</div>
      <div css={css`position: absolute; top: 150px; left: 160px;`}>to</div>
      <div css={css`position: absolute; top: 180px; left: 120px;`}>get</div>
      <div css={css`position: absolute; top: 200px; left: 240px; transform: rotateZ(-15deg);`}>
        weird
      </div>
      <div css={css`position: absolute; top: 220px; left: 300px;`}>and</div>
      <div css={css`position: absolute; top: 270px; left: 400px; transform: rotateZ(10deg); ${bpMaxSM} { left: 330px; }`}>
        hacky
      </div>
      <div css={css`position: absolute; top: 290px; left: 490px; ${bpMaxSM} { top: 310px; left: 340px; }`}>with the</div>
      <div css={css`position: absolute; top: 350px; left: 420px; ${bpMaxSM} { left: 360px; }`}>formatting</div>
    </div>
  )
}
