import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'

const LinkTooltip = forwardRef((props, ref) => {
  const previewKey = props.href.replace(/^\//, '')
  if (props.bidirectionalLinkPreviews[previewKey]) {
    return (
      <Tippy
        duration="600"
        distance="2"
        theme="light"
        arrow={true}
        interactive={true}
        animation="shift-away"
        content={props.bidirectionalLinkPreviews[previewKey]}
        ref={ref}
        css={css`
          padding: 0.2em;
          font-size: 0.75em;
        `}
      >
        <span ref={ref}>{props.children}</span>
      </Tippy>
    )
  }

  return (
    <Tippy
      duration="600"
      distance="2"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.href}
      ref={ref}
      css={css`
        padding: 0.2em;
        font-size: 0.75em;
      `}
    >
      <span ref={ref}>{props.children}</span>
    </Tippy>
  )
})

const TipLink = ({ noTip, children, href, ...other }) => {
  const theme = useTheme()

  if (noTip) {
    return (
      <a
        css={css({
          display: 'inline-block',
          color: `${theme.colors.blue}`,
          lineHeight: '1em',
          transition: 'all 0.5s ease',
          ':hover, :focus': {
            cursor: 'pointer',
            color: `${theme.colors.orange}`,
            transition: 'all 0.6s ease',
          },
        })}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
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
        color: `${theme.colors.blue}`,
        borderRadius: '4px',
        lineHeight: '1em',
        transition: 'all 0.6s ease',
        ':hover, :focus': {
          background: `${theme.colors.lightBlue}`,
          color: 'white',
          padding: '6px',
        },
      })}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...other}
    >
      <LinkTooltip href={href} {...other}>
        {children}
      </LinkTooltip>
    </a>
  )
}

export default TipLink
