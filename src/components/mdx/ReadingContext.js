import { css } from '@emotion/core'
import React from 'react'
import SimpleCard from '../SimpleCard'
import { fonts } from '../../lib/typography'
import colors from '../../lib/colors'

export const ReadingContext = ({ children, url }) => {
  return (
    <SimpleCard
      style={{
        textAlign: 'center',
        marginTop: '-2em',
        marginBottom: '2em',
        padding: '1em 1.2em',
        width: '840px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5 style={{margin: '0', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: `${fonts.walsheim}`, color: `${colors.blue}`, fontWeight: 'black', fontSize: '80%'}}>Why I Read This</h5>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          css={css`display: flex; align-items: center; &:hover {
              h6 {
                  color: ${colors.lightOrange};
              }
              rect {
                  fill: ${colors.lightOrange};
              }
          }`}
        >
          <h6 css={css`font-size: 70%; letter-spacing: 0.01em; margin: 0; transition: all 400ms ease-in-out;` }>
            Book info on Library Thing
          </h6>
          <svg style={{ marginLeft: '8px' }} width={18} height={18} fill="none">
            <rect style={{ transition: 'all 400ms ease-in-out' }} width={18} height={18} rx={2} fill="#C1C6DB" />
            <path
              d="M13.691 11.598a.817.817 0 00-1.525-.555l-.248.487c-.373.714-.747 1.19-1.154 1.444-.408.255-1.02.374-1.835.374a.46.46 0 01-.455-.522l1.083-7.903c.034-.17.17-.306.442-.408l.445-.114a.417.417 0 00-.103-.82H6.075a.422.422 0 00-.112.829l.384.105c.255.068.374.204.34.408L5.6 12.855c-.034.204-.187.34-.442.408l-.453.116a.416.416 0 00.103.818h6.85a1.8 1.8 0 001.755-1.395l.278-1.204z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      <p css={css`max-width: 95%; p {padding: 0.4em 0 1em; font-size: 90%; max-width: 100%; line-height: 1.6em;}`}>{children}</p>
    </SimpleCard>
  )
}
