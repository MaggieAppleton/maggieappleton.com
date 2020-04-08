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
    // Container
    <div
      css={css`
        position: fixed;
        top: 20vh;
        left: 0;
        bottom: 20%;
        width: 280px;
        display: flex;
        overflow: hidden;
        padding: 0;
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
      {/* Nacvbar */}
      <nav
        css={css`
          position: absolute;
          align-items: right;
          float: right;
          border-right: 1px solid ${theme.colors.grey};
          font-family: ${fonts.walsheim};
          padding: 0 16px;
          a {
            color: ${theme.colors.grey};
            display: flex;
            text-decoration: none;
            flex-direction: column;
            text-align: right;
            font-size: 0.8em;
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
