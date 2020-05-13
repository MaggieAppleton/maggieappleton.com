import React from 'react'
import { Link } from 'gatsby'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Image from './PostImage'
import ReadNext from './ReadNext'
import Code from './Code'
import Tooltip from './Tooltip'
import TipLink from './TipLink'
import NoteSidebar from './NoteSidebar'
import SimpleCard from '../SimpleCard'
import {
  Divider,
  H3,
  H4,
  Blockquote,
  Center,
  SmallCenter,
  OrderedList,
  UnorderedList,
  TwoParagraph,
} from './TextStyles'
import {
  ThreeImageGrid,
  TwoCol,
  ImageGrid,
  ImageFrame,
  FullWidth2Col,
  FullWidthImage,
  FullWidth,
} from './ImageStyles'
import Book from '../Book'
import ResourceBook from './ResourceBook'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  p: props => <Paragraph {...props} />,
  Image: props => <Image {...props} />,
  code: Code,
  ol: props => <OrderedList {...props} />,
  ul: props => <UnorderedList {...props} />,
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Divider {...props} />,
  Tooltip: props => <Tooltip {...props} />,
  pre: preProps => <pre {...preProps} />,
  a: props => <TipLink {...props} />,
  Link: props => <Link {...props} />,
  NoteSidebar: props => <NoteSidebar {...props} />,
  SmallCenter: props => <SmallCenter {...props} />,
  Center: props => <Center {...props} />,
  ImageGrid: props => <ImageGrid {...props} />,
  TwoCol: props => <TwoCol {...props} />,
  ThreeImageGrid: props => <ThreeImageGrid {...props} />,
  ReadNext: props => <ReadNext {...props} />,
  SimpleCard: props => <SimpleCard {...props} />,
  Book: props => <Book {...props} />,
  ResourceBook: props => <ResourceBook {...props} />,
  ImageFrame: props => <ImageFrame {...props} />,
  FullWidth: props => <FullWidth {...props} />,
  FullWidth2Col: props => <FullWidth2Col {...props} />,
  FullWidthImage: props => <FullWidthImage {...props} />,
  TwoParagraph: props => <TwoParagraph {...props} />,
}
