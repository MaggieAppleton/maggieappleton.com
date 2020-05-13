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
        font-size: 0.75em;
      `}
      xw
    >
      <span ref={ref}>{props.children}</span>
    </Tippy>
  )
})

const TipLink = ({ noStyle, noTip, children, to, ...other }) => {
  if (noStyle) {
    return (
      <a
        css={css({
          color: '#23A3FA',
          transition: 'all 0.6s ease',
          ':hover, :focus': {
            color: '#FD934B',
            transition: 'all 0.6s ease',
          },
        })}
        target="_blank"
        rel="noopener noreferrer"
        href={to}
        {...other}
      >
        {children}
      </a>
    )
  }

  if (noTip) {
    return (
      <a
        css={css({
          display: 'inline-block',
          color: '#23A3FA',
          lineHeight: '1em',
          borderRadius: '4px',
          transition: 'all 0.6s ease',
          ':hover, :focus': {
            border: '1px solid #B5E2FF',
            padding: '6px',
            color: '#23A3FA',
            transition: 'all 0.6s ease',
          },
        })}
        target="_blank"
        rel="noopener noreferrer"
        href={to}
        {...other}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      css={css({
        display: 'inline-block',
        color: '#23A3FA',
        borderRadius: '4px',
        lineHeight: '1em',
        transition: 'all 0.6s ease',
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

export default TipLink
