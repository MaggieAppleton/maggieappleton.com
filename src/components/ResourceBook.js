import React from 'react'
import { css } from '@emotion/core'
// import Img from 'gatsby-image'
// import { StaticQuery, graphql } from 'gatsby'
import { bpMinSM } from '../lib/breakpoints'

export default function ResourceBook(props) {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer"  href={props.url}>
        <div
          css={css({
            // justifyContent: 'space-between',
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
          })}>
          <div
            css={css({
              [bpMinSM]: {
                padding: '20px',
              },
              padding: '8px',
              color: '#464E55',
              // justifyContent: 'space-between',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignSelf: 'start',
              h1: {
                fontSize: '1.5em',
                marginBottom: '16px',
                lineHeight: '1.2em',
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
                alignSelf: 'center',
              },
              '.description': {
                lineHeight: '1.4em',
                fontSize: '1em',
                maxWidth: '450px',
              },
              ':hover': {
                transition: 'all 1s ease-in',
                h1: { color: '#8748C7' },
              },
            })}>
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
              alt='book cover'
              src={props.img}
            />
            <div class='dataBlock'>
              <h1>{props.title}</h1>
              <h5>{props.author}</h5>
              <p class='description'>{props.description}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
