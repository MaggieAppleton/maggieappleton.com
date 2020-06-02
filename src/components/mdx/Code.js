import React from 'react'
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const Code = ({
  children,
  codeString,
  className = 'language-js',
  ...props
}) => {
  const language = className.replace(/language-/, '')
  if (props['react-live']) {
    return (
      <LiveProvider code={children.trim()} theme={shadesOfPurple}>
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
        theme={shadesOfPurple}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '1em 1.4em' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code
