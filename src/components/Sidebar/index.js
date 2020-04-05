import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM, bpMaxMD, bpMinLG } from '../../lib/breakpoints'
import Links from './Links'
import { fonts } from '../../lib/typography'

// Learning how to build this here: https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp

const Sidebar = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        height: 240px;
        display: inline-block;
        position: fixed;
        z-index: 1;
        top: 26%;
        overflow-x: hidden;
        padding: 0;
        font-family: ${fonts.walsheim};
        border-right: 1px solid ${theme.colors.grey};
        ${bpMaxMD} {
          width: 180px;
        }
        ${bpMinLG} {
          width: 220px;
        }
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
