import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { fonts } from '../lib/typography'

const PreviousNext = props => {
  const theme = useTheme()
  return (
    <div
      css={css`
      margin: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
        margin-top: 3.2em;
        max-width: 660px;
        .linkContainer {
          position: relative;
          display: flex;
          flex-direction: row;
          transition: all 600ms ease-in-out;
          svg {
            fill: ${theme.colors.lightGrey};
            transition: all 600ms ease-in-out;
          }
          &:hover {
            h4 {
              color: ${theme.colors.black};
            }
            svg {
              fill: ${theme.colors.black};
              transform: scale(1.2);
            }
          }
        }
        h4 {
          font-family: ${fonts.walsheimLight};
          transition: 600ms ease;
          padding: 0 0.6em;
          margin: 0;
          color: ${theme.colors.grey};
          max-width: 300px;
          font-size: 90%;
        }
        .left {
          max-width: 200px;
          transition: 600ms ease;
          justify-self: flex-start;
        }
        .arrow {
          display: inline-block;
        }
        .right {
          transition: 600ms ease;
          justify-self: flex-end;
          max-width: 200px;
          text-align: right;
        }
      `}
    >
      {props.prevSlug && (
        <Link to={`/${props.prevSlug}`} aria-label="View previous page">
          <div className="left linkContainer">
            <i className="arrow">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0L10 2L4 8L10 14L8 16L0 8L8 0Z"
                />
              </svg>
            </i>
            <h4>{props.prevTitle}</h4>
          </div>
        </Link>
      )}
      {props.nextSlug && (
        <Link to={`/${props.nextSlug}`} aria-label="View next page">
          <div className="right linkContainer">
            <h4>{props.nextTitle}</h4>
            <i className="arrow">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 16L1.74846e-07 14L6 8L1.22392e-06 2L2 -6.99382e-07L10 8L2 16Z"
                />
              </svg>
            </i>
          </div>
        </Link>
      )}
    </div>
  )
}

export default PreviousNext
