import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from './'

const bidirectionallinkpreviews = {}

const Links = props => (
  <components.a
    {...props}
    bidirectionallinkpreviews={bidirectionallinkpreviews}
  />
)

export default ({ children }) => (
  <MDXProvider components={{ ...components, a: Links }}>{children}</MDXProvider>
)
