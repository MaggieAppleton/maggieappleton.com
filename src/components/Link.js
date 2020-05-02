import React, { forwardRef } from 'react'
import { css } from '@emotion/core'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import './link-tooltip-theme.css'

const TippyElement = forwardRef((props, ref) => {
  return (
    <Tippy
      duration="600"
      distance="2"
      theme="linktooltip"
      interactive={true}
      arrow={false}
      animation="shift-away"
      content={props.link}
    >
      <span
        css={css({
          display: 'inline',
          transition: 'all 0.4s',
        })}
      >
        <span ref={ref}>{props.children}</span>
      </span>
    </Tippy>
  )
})

export default TooltipLink = ({ children, to, ...other }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={to} {...other}>
      <TippyElement link={to}>{children}</TippyElement>
    </a>
  )
}
