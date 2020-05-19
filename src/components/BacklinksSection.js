import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { fonts } from '../lib/typography'
// import { rhythm } from '../lib/typography'

export const BacklinkItem = ({ pageTitle, pageLink, excerpt }) => {
  const theme = useTheme()

  return (
    <a href={pageLink}>
      <div
        css={css({
          color: theme.colors.black,
          padding: '0.6em 1em',
          fontSize: '75%',
          opacity: '70%',
          border: `1px solid ${theme.colors.lightGrey}`,
          borderRadius: '4px',
          h4: {
            margin: '0.4em 0',
            fontFamily: fonts.walsheimLight,
            letterSpacing: '0',
            fontSize: '1.2em',
          },
        })}
      >
        <h4>{pageTitle}</h4>
        <p>{excerpt}</p>
      </div>
    </a>
  )
}

export const BacklinksSection = ({ children }) => {
  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '1em',
        margin: '4em auto 3em',
        maxWidth: '660px',
      })}
    >
      {children}
    </div>
  )
}
