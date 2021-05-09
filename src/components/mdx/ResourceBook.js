import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'
import { useTheme } from '../Theming'
import { fonts } from '../../lib/typography'


export default function ResourceBook({ url, large, title, img, author, notesUrl, description, ...props }) {
const theme = useTheme()

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
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
            margin: '0.8rem 0'
          })}
          {...props}
        >
          <div
            css={css({
              [bpMaxSM]: {
                flexDirection: 'column',
                justifyContent: 'center',
              },
              color: '#464E55',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'start',
              opacity: '90%',
              h1: {
                fontSize: '1.5rem',
                maxWidth: '450px',
                marginBottom: '16px',
                lineHeight: '1.7rem',
                marginTop: '0.4rem',
              },
              h5: {
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1rem',
                lineHeight: '1.4rem',
                marginBottom: '0.4rem'
              },
              img: {
                maxWidth: '30%',
                borderRadius: '4px',
                [bpMaxSM]: {
                  maxWidth: '100%',
                  borderRadius: '4px',
                }
              },
              '.dataBlock': {
                paddingLeft: '1.8rem',
                alignSelf: 'center',
                maxWidth: '70%',
                [bpMaxSM]: {
                  alignSelf: 'center',
                  maxWidth: '100%'
                }
              },
              '.description': {
                lineHeight: '140%',
                fontSize: '95%',
                marginTop: '0.4rem'
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
                marginTop: '30px',
                padding: '10px',
                maxWidth: large ? '250px' : '150px',
                maxHeight: large ? '300px' : '200px',
                alignSelf: 'center',
                justifySelf: 'center',
                borderRadius: '3px',
                transition: 'all 350ms ease',
                background: 'white',
                boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.2)',
              })}
              alt="book cover"
              src={img}
            />
            <div className="dataBlock">
              <h1>{title}</h1>
              <div css={css({
                display: 'flex',
                justifyContent: 'space-between',
                a: {
                  fontSize: '80%',
                  color: `${theme.colors.orange}`,
                  fontFamily: `${fonts.walsheim}`,
                }
              })}>
                <h5>{author}</h5>
                {notesUrl ? <a href={notesUrl}>➽ Book Notes</a> : null}
              </div>
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
