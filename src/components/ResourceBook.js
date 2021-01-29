import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { bpMaxSM } from '../lib/breakpoints'

export default function ResourceBook(props) {
  const theme = useTheme()
  return (
    <>
      <a href={props.url}>
        <div
          css={css({
            '.gatsby-image-wrapper': {
              width: '100%',
              height: '100%',
            },
            ':hover': {
              img: {
                boxShadow: '0 10px 30px -10px rgba(0,0,20,0.25)',
                transition: 'all 350ms ease',
              },
            },
            transition: 'all 350ms ease',
          })}
          {...props}
        >
          <div
            css={css({
              [bpMaxSM]: {
                padding: '20px',
                gridTemplateColumns: '1fr',
              },
              padding: '8px',
              color: '#464E55',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignSelf: 'start',
              opacity: '90%',
              h1: {
                fontSize: '1.5em',
                maxWidth: '450px',
                marginBottom: '16px',
                lineHeight: '1.2em',
                marginTop: '0.4em',
              },
              h5: {
                fontSize: '0.9em',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                lineHeight: '1.3em',
              },
              img: {
                maxWidth: '100%',
                borderRadius: '4px',
              },
              '.dataBlock': {
                paddingLeft: '20px',
                alignSelf: 'top',
              },
              '.description': {
                lineHeight: '1.4em',
                fontSize: '1em',
                maxWidth: '450px',
              },
              ':hover': {
                transition: 'all 0.4s ease-in-out',
                opacity: '100%',
                cursor: 'pointer',
                h1: { color: `${theme.colors.orange}`, transition: 'all 0.4s ease-in-out', },
              },
            })}
          >
            <img
              css={css({
                padding: '10px',
                maxWidth: props.large ? '250px' : '150px',
                maxHeight: props.large ? '300px' : '200px',
                alignSelf: 'center',
                justifySelf: 'center',
                borderRadius: '3px',
                transition: 'all 350ms ease',
                background: 'white',
                boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.2)',
              })}
              alt="book cover"
              src={props.img}
            />
            <div className="dataBlock">
              <h1>{props.title}</h1>
              <h5>{props.author}</h5>
              <p className="description">{props.description}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
