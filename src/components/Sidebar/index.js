import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'
import Links from './Links'
import { fonts } from '../../lib/typography'

// Learning how to build this here: https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp

const Sidebar = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        height: 260px;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 26%;
        overflow-x: hidden;
        padding: 0;
        font-family: ${fonts.walsheim};
        border-right: 1px solid ${theme.colors.grey};
        ${bpMaxSM} {
          display: none;
          visibility: hidden;
        }
      `}
    >
      <nav
        css={css`
          a {
            color: ${theme.colors.grey};
            display: flex;
            text-decoration: none;
            flex-direction: column;
            text-align: right;
            font-size: 0.8em;
            padding-right: 16px;
            :hover {
              color: ${theme.colors.orange};
              transition: 0.5s;
            }
          }
        `}
      >
        <Links />
      </nav>
    </div>
  )
}

export default Sidebar
