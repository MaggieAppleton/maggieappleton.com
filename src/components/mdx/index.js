import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'
import Link from '../link'
import NoteSidebar from './NoteSidebar'
import styled from '@emotion/styled'

const H3 = styled.h3`
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 0.4em;
`

const H4 = styled.h4`
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 0.4em;
`

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
  Link: props => <Link {...props} />,
  NoteSidebar: props => <NoteSidebar {...props} />,
}
