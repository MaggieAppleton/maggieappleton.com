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
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 2em;
        margin-top: 4em;
        max-width: 660px;

        .linkContainer {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 1em;
          svg {
            fill: ${theme.colors.lightGrey};
            transition: 600ms ease;
          }
          &:hover {
            h4 {
              color: ${theme.colors.black};
            }
            svg:hover {
              fill: ${theme.colors.orange};
            }
          }
        }
        h4 {
          font-family: ${fonts.walsheimLight};
          transition: 600ms ease;
          padding: 0 0.6em;
          margin: 0;
          color: ${theme.colors.grey};
          max-width: 220px;
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
        }
      `}
    >
      {props.prevSlug && (
        <Link to={`/${props.prevSlug}`} aria-label="View previous page">
          <div className="left" className="linkContainer">
            <i className="arrow">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.715 15L17.1337 10.58C17.2531 10.4647 17.3484 10.3268 17.4139 10.1743C17.4794 10.0218 17.5139 9.85773 17.5153 9.69175C17.5168 9.52578 17.4851 9.36118 17.4223 9.20756C17.3594 9.05394 17.2666 8.91437 17.1492 8.79701C17.0319 8.67964 16.8923 8.58682 16.7387 8.52397C16.5851 8.46112 16.4205 8.42949 16.2545 8.43094C16.0885 8.43238 15.9245 8.46686 15.772 8.53237C15.6195 8.59788 15.4816 8.69311 15.3663 8.8125L10.0625 14.1163C9.82816 14.3507 9.69652 14.6685 9.69652 15C9.69652 15.3315 9.82816 15.6493 10.0625 15.8837L15.3663 21.1875C15.602 21.4152 15.9178 21.5412 16.2455 21.5383C16.5732 21.5355 16.8868 21.404 17.1185 21.1723C17.3503 20.9405 17.4817 20.627 17.4846 20.2993C17.4874 19.9715 17.3614 19.6558 17.1337 19.42L12.715 15ZM15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5Z" />
              </svg>
            </i>
            <h4>{props.prevTitle}</h4>
          </div>
        </Link>
      )}
      {props.nextSlug && (
        <Link to={`/${props.nextSlug}`} aria-label="View next page">
          <div className="right" className="linkContainer">
            <h4>{props.nextTitle}</h4>
            <i className="arrow">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.285 15L12.8663 19.42C12.6386 19.6558 12.5126 19.9715 12.5154 20.2993C12.5183 20.627 12.6497 20.9405 12.8815 21.1723C13.1132 21.404 13.4268 21.5355 13.7545 21.5383C14.0822 21.5412 14.398 21.4152 14.6337 21.1875L19.9375 15.8837C20.1718 15.6493 20.3035 15.3315 20.3035 15C20.3035 14.6685 20.1718 14.3507 19.9375 14.1163L14.6337 8.8125C14.398 8.5848 14.0822 8.45881 13.7545 8.46166C13.4268 8.46451 13.1132 8.59597 12.8815 8.82773C12.6497 9.05949 12.5183 9.373 12.5154 9.70075C12.5126 10.0285 12.6386 10.3442 12.8663 10.58L17.285 15ZM15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5Z" />
              </svg>
            </i>
          </div>
        </Link>
      )}
    </div>
  )
}

export default PreviousNext
