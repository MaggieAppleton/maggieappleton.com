import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM } from '../lib/breakpoints'
import RecCourses from './RecCoursesCard'

export default function ResourceCard(props) {
  // console.log('props', props)
  return (
    <>
      <div
        css={css({
          margin: '10px',
          alignSelf: 'start',
          borderRadius: '6px',
          background: 'rgba(253,252,252,1)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: '5px 5px 20px 0 rgba(218,224,228,0.8)',
          justifyContent: 'space-between',
          '.gatsby-image-wrapper': {
            width: '100%',
            height: '100%',
          },
          ':hover': {
            boxShadow: '0px 2px 2px 0 rgba(190,198,206,0.9)',
            transition: 'all 0.4s ease',
            transform: 'scale(0.99)',
            border: '1px solid rgba(218,224,228,1)',
          },
          transition: 'all 0.4s ease',
        })}>
        <div
          css={css({
            justifyContent: 'space-between',
            color: '#464E55',
            transition: 'all 1s ease',
            '.dataBlock': {
              [bpMinSM]: { padding: '25px' },
              padding: '10px',
            },
            h1: {
              fontSize: '1.6em',
            },
            h5: {
              textAlign: 'right',
              fontSize: '0.9em',
              letterSpacing: '0.1em',
              lineHeight: '1.3em',
            },
            img: {
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '6px 6px 0 0 ',
              // [bpMinMD]: { width: '200%' },
            },
            '.description': {
              lineHeight: '1.3em',
              fontSize: '1em',
            },
            ':hover': {
              h1: {
                color: '#8748C7',
              },
            },
          })}>
          <a href={props.url}>
            <img alt={props.title} src={props.img} />
          </a>

          <div class='dataBlock'>
            <a href={props.url}>
              <h1>{props.title}</h1>
            </a>

            <p class='description'>{props.description}</p>
            <h5>{props.cost}</h5>

            {props.recCourses && <RecCourses props={props.recCourses} />}
          </div>
        </div>
      </div>
    </>
  )
}
