import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from './'

const bidirectionalLinkPreviews = {}

const Links = props => (
  <components.a
    {...props}
    bidirectionalLinkPreviews={bidirectionalLinkPreviews}
  />
)

export default ({ children }) => (
  <MDXProvider components={{ ...components, a: Links }}>{children}</MDXProvider>
)
