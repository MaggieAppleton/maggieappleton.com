import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'
import { fonts } from '../../lib/typography'
import Container from '../Container'

const Header = () => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding-top: 20px;
        font-family: ${fonts.walsheim};
        background: ${theme.colors.headerBg};
        margin: 0 auto;
        justify-content: center;
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: ${theme.colors.grey};
              &:hover {
                color: ${theme.colors.primary};
                text-decoration: none;
                transition: 0.5s;
              }
            `}
          >
            Hello
          </Link>
          <div
            css={css`
              font-size: 0.8em;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.grey};
                margin-left: 16px;
                margin-right: 16px;
                :hover {
                  color: ${theme.colors.orange};
                  transition: 0.5s;
                }
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
