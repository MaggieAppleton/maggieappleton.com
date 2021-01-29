import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import {inlinePositioning} from 'tippy.js'
import { Link as GatsbyLink } from "gatsby"
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'

const LinkTooltip = forwardRef((props, ref) => {
  const previewKey = props.href.replace(/^\//, '')
  if (props.bidirectionallinkpreviews[previewKey]) {
    return (
      <Tippy
        inlinePositioning={true}
        plugins={[inlinePositioning]}
        duration="600"
        theme="light"
        arrow={true}
        interactive={true}
        animation="shift-away"
        content={props.bidirectionallinkpreviews[previewKey]}
        ref={ref}
        css={css`
        h2 {
          padding: 0 0.2em;
        }
          p {
            line-height: 1.4em;
          padding: 0.2em;
          font-size: 1.3em;
          }
        `}
      >
        <span ref={ref}>{props.children}</span>
      </Tippy>
    )
  }

  return (
    <Tippy
      inlinePositioning={true}
      plugins={[inlinePositioning]}
      duration="600"
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
      <span css={css`
          word-break: break-all;
          word-wrap: break-word;
          overflow: visible;
          white-space: pre;
        `} ref={ref}>{props.children}</span>
    </Tippy>
  )
})

const TipLink = ({ noTip, children, href, ...other }) => {
  const theme = useTheme()
  const internal = /^\/(?!\/)/.test(href)

  if(internal){
    return (
      <GatsbyLink css={css`
      display: inline-block;`}
      to={href}{...other}>
        <LinkTooltip internal href={href}{...other}>
        <span css={css`
          text-decoration: none;
          line-height: 1;
          position: relative;
          z-index: 0;
          display: inline-block;
          padding: 3px 0 8px 3px;
          top: -2px;
          overflow: hidden;
          color: ${theme.colors.orange};
          vertical-align: bottom;
          transition: color .3s ease-out;
          ::before {
              display: inline-block;
              content: "";
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              transform: translateY(calc(100% - 2px));
              width: 0px;
              height: 100%;
              background: ${theme.colors.lightestGrey};
              transition: all 500ms ease-in-out;
          }
          :hover::before, :focus::before {
              width: 99%;
              transition: all 500ms ease-in-out;
              background: ${theme.colors.lightOrange};
          }
        `}>{children}</span>
      </LinkTooltip>
      </GatsbyLink>
    )
  }

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
        borderRadius: '3px',
        lineHeight: '1em',
        transition: 'all 0.6s ease',
        padding: '4px 2px',
        ':hover, :focus': {
          background: `${theme.colors.lightBlue}`,
          color: 'white',
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
