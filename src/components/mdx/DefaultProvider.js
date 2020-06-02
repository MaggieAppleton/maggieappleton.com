import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from './'

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
