import React, { useState } from 'react'
import { css } from '@emotion/core'
import downArrow from './downArrow.svg'

function RecCourses(props) {
  const [isDowndownOpen, setDropdown] = useState(false)

  const toggleDropdown = () => {
    isDowndownOpen ? setDropdown(false) : setDropdown(true)
  }

  return (
    <div
      css={css({
        hr: {
          margin: '18px 0 10px',
          maxWidth: '100%',
          border: 'none',
          background: '#BECCD6'
        },
        button: {
          margin: '0',
          padding: 0,
          display: 'inline-block',
          background: 'none',
          paddingRight: '10px',
          ':focus' : {
            outline: 'none'
          }
        },
        img: {
          marginBottom: 0
        }
      })}>
      <hr />
      <button
        aria-label='Click to view recommended courses'
        onClick={toggleDropdown}>
        <img alt='down arrow' src={downArrow} />
        <h5
          css={css({
            display: 'inline-block',
            fontSize: '0.9em',
            margin: '0',
            paddingLeft: '10px',
          })}>
          Recommended Courses
        </h5>
      </button>

      {isDowndownOpen
        ? props.props.map((rc, index) => (
            <div
              css={css({
                margin: '6px 0',
                p: {
                  fontSize: '0.92em',
                  margin: '0',
                  display: 'inline-flex',
                  paddingRight: '4px',
                },
                h5: {
                  display: 'inline-flex',
                  fontSize: '0.8em',
                  textTransform: 'none',
                  letterSpacing: '0',
                  margin: '0',
                },
              })}
              key={index}>
              <a href={rc.url}>
                <p>{rc.title}</p>
              </a>
              <h5>by {rc.instructor}</h5>
            </div>
          ))
        : null}
    </div>
  )
}

export default RecCourses
