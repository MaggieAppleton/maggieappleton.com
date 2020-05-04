import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import PostImage from './PostImage'
import Code from './Code'
import { TooltipLink } from './TooltipLink'
import NoteSidebar from './NoteSidebar'
import { Divider, H3, H4, Blockquote } from './MdxStyles'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  p: props => <Paragraph {...props} />,
  img: props => <PostImage {...props} />,
  code: Code,
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Divider {...props} />,
  blockquote: props => <Blockquote {...props} />,
  pre: preProps => <pre {...preProps} />,
  TooltipLink: props => <TooltipLink {...props} />,
  NoteSidebar: props => <NoteSidebar {...props} />,
}
