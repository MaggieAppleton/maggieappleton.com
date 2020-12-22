import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { fonts } from '../lib/typography'

export const ReferenceItem = ({ pageTitle, pageLink, excerpt }) => {
  const theme = useTheme()
  return (
    <a href={`/${pageLink}`}>
      <div
        css={css({
          width: '320px',
          color: theme.colors.black,
          padding: '1em 1.4em',
          fontSize: '75%',
          opacity: '80%',
          margin: '0.4em',
          border: `1px solid ${theme.colors.lightestGrey}`,
          borderRadius: '6px',
          boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
          background: 'white',
          transition: '500ms',
          ':hover': {
          transform: 'scale(1.015)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)'
        },
          h4: {
            margin: '0.4em 0 0.8em',
            fontFamily: fonts.walsheimLight,
            letterSpacing: '0',
            fontSize: '1.1em',
          },
          p: {
            lineHeight: '1.3em',
            fontSize: '1.05em'
          }
        })}
      >
        <h4>{pageTitle}</h4>
        <p>{excerpt}</p>
      </div>
    </a>
  )
}

export const ReferenceBlock = ({ references }) => {
  const theme = useTheme()
  return (
    <>
    <div
      css={css({
        borderTop: `1px solid ${theme.colors.lightestGrey}`,
        paddingTop: '3em',
        margin: '4em auto 3em',
        maxWidth: '880px',
        gridColumn: '1/4',
        h5: {
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '1em',
          fontWeight: 'bold'
        },
        '.innerBlock': {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }
      })}
    >
    <h5>Linked References</h5>
    <div className="innerBlock">
    {references}
    </div>
      
    </div>
    </>
  )
}
