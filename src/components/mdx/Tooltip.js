import React, { forwardRef } from 'react'
import { css } from '@emotion/core'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'

const Tooltip = forwardRef((props, ref) => {
  return (
    <Tippy
      duration="500"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.tiptext}
      css={css`
        padding: 0.4em;
        font-size: 0.8em;
      `}
    >
      <div
        css={css({
          display: 'inline',
          color: '#EB5F19',
          borderRadius: '4px',
          lineHeight: '1em',
          transition: 'all 0.5s',
          ':hover, :focus': {
            background: '#FF9034',
            color: 'white',
            padding: '6px',
          },
        })}
      >
        <span ref={ref}>{props.children}</span>
      </div>
    </Tippy>
  )
})

export default Tooltip

// To use in any MDX file, add 'import Tooltip from '../../../src/components/mdx/Tooltip.js' to the top.

// Then add <Tooltip tiptext="I'm working right?">Hello</Tooltip> anywhere in the body
