import React from 'react'
import {css} from '@emotion/core'
import theme from 'prism-react-renderer/themes/nightOwl'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { bpMaxSM } from '../../lib/breakpoints'

const RE = /{([\d,-]+)}/

const wrapperStyles = css`
  overflow: auto;
`

const preStyles = css`
  float: left;
  width: 660px;
  overflow: initial;
  padding: 1.4em 1.8em;
  border-radius: 0.3em;
  font-weight: 400;
  letter-spacing: 0.05em;
  font-family: 'IBM Plex Mono';
  ${bpMaxSM} {
    width: 100%;
  }
`

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const Code = ({
  children,
  codeString,
  metastring,
  className = 'language-js',
  ...props
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const language = className.replace(/language-/, '')
  if (props['react-live']) {
    return (
      <LiveProvider code={children.trim()} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div css={wrapperStyles}>
            <pre className={className} style={style} css={preStyles}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i, className: shouldHighlightLine(i) ? 'highlight-line' : '' })}>
                  <span
                    css={css`
                      display: inline-block;
                      width: 2em;
                      user-select: none;
                      opacity: 0.3;
                    `}
                  >
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
            </div>
        )}
      </Highlight>
    )
  }
}

export default Code
