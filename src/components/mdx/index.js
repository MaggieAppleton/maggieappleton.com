import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'
import Link from '../link'
import NoteSidebar from './NoteSidebar'
import { Divider, H3, H4 } from './MdxStyles'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  hr: props => <Divider {...props} />,
  pre: preProps => <pre {...preProps} />,
  Link: props => <Link {...props} />,
  NoteSidebar: props => <NoteSidebar {...props} />,
}
