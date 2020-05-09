import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'
import { css } from '@emotion/core'

const LinkTooltip = forwardRef((props, ref) => {
  return (
    <Tippy
      duration="600"
      distance="2"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.to}
      ref={ref}
      css={css`
        padding: 0.2em;
        font-size: 0.7em;
      `}
      xw
    >
      <span ref={ref}>{props.children}</span>
    </Tippy>
  )
})

const TooltipLink = ({ children, to, ...other }) => {
  return (
    <a
      css={css({
        display: 'inline-block',
        color: '#23A3FA',
        borderRadius: '4px',
        lineHeight: '1em',
        transition: 'all 0.5s',
        ':hover, :focus': {
          background: '#31AFF6',
          color: 'white',
          padding: '6px',
        },
      })}
      target="_blank"
      rel="noopener noreferrer"
      href={to}
      {...other}
    >
      <LinkTooltip to={to}>{children}</LinkTooltip>
    </a>
  )
}

export default TooltipLink
