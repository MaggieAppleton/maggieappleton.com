import React, { useState } from 'react'
import { css } from '@emotion/core'
import Container from '../Container'
import { bpMaxSM } from '../../lib/breakpoints'
import { useTheme } from '../Theming'

const Toggle = ({ children }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)
  const theme = useTheme()
  const color = theme.colors.darkGrey

  return (
    <div
      css={css`
        display: none;
        visibility: hidden;
        ${bpMaxSM} {
          display: block;
          visibility: visible;
        }
      `}
    >
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={css`
          z-index: 30;
          top: -5px;
          left: -5px;
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${theme.colors.darkGrey};
            position: absolute;
            left: 0;
            ${isToggledOn ? 'background: transparent' : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${color};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 2px;
              background: ${color};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: ${theme.colors.headerBg};
            align-items: start;
          `}
        >
          <Container
            css={css`
              align-items: start;
              margin: 0;
              a {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: flex-start;
                color: ${theme.colors.darkGrey};
                font-size: 2em;
                margin: 0.2em;
                padding: 10px;
                border-radius: 5px;
                transition: all 600ms ease;
                :hover {
                  background: ${theme.colors.orange};
                  color: white;
                  transition: all 600ms ease;
                }
                .active {
                  background: ${theme.colors.orange};
                  color: white;
                  transition: all 600ms ease;
                }
              }
            `}
          >
            {children}
          </Container>
        </div>
      )}
    </div>
  )
}

export default Toggle
