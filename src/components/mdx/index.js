// ------------- General Components--------------- //
import React from 'react'
import InnerLink from './InnerLink'
import Title from './Title'
import Subtitle from './Subtitle'
import { Paragraph, IntroParagraph } from './Paragraph'
import ReadNext from './ReadNext'
import Code from './Code'
import Tooltip from './Tooltip'
import TipLink from './TipLink'
import NoteSidebar from './NoteSidebar'
import SimpleCard from '../SimpleCard'
import LinkCard from './LinkCard'
import { Spacer } from './Spacer'
import { ComingSoon } from './ComingSoon'
import { Draft } from './Draft'
import {
  Divider,
  H3,
  H4,
  H5,
  H6,
  Blockquote,
  Center,
  SmallCenter,
  OrderedList,
  UnorderedList,
  TwoParagraph,
  Subtext,
} from './TextStyles'
import {
  Img,
  BasicImage,
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
import Footnote from './Footnote'
import {
  ResearchItem,
  ResearchBlock,
} from './ResearchBlock'
import { Tween, Timeline, PlayState, Controls } from 'react-gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
// import { ReplyOnTwitter } from './ReplyOnTwitter'
import { Arrow } from './Arrow'
// ------------- Single Use Components--------------- //
import { Tools, Hardware } from './SingleUse/Tools'
import { MediumMaterialsMeatSection } from './SingleUse/MediumMaterialsMeatSection'
import { GsapScroller, TweenRedBigBox, TweenSpinningBox, TweenReverseSpinningBox, TweenBlueRedBox } from './SingleUse/GreensockBasics'
import { StaticCSSPosition, RelativeCSSPosition, AbsoluteCSSPosition, FixedCSSPosition } from './SingleUse/CSSPositions'
import {StreamAnimation } from './SingleUse/StreamAnimation'

gsap.registerPlugin(ScrollTrigger);


// ------------- Exports--------------- //
export default {
  // ------------- General Components--------------- //

  a: props => <TipLink {...props} />,
  Arrow: Arrow,
  blockquote: props => <Blockquote {...props} />,
  Book: props => <Book {...props} />,
  Center: props => <Center {...props} />,
  code: Code,
  ComingSoon: props => <ComingSoon {...props} />,
  Controls: props => <Controls {...props} />,
  Draft: props => <Draft {...props} />,
  Footnote: props => <Footnote {...props} />,
  FullWidth: props => <FullWidth {...props} />,
  FullWidth2Col: props => <FullWidth2Col {...props} />,
  FullWidthImage: props => <FullWidthImage {...props} />,
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  hr: props => <Divider {...props} />,
  img: props => <Img {...props} />,
  ImageFrame: props => <ImageFrame {...props} />,
  ImageGrid: props => <ImageGrid {...props} />,
  BasicImage: props => <BasicImage {...props} />,
  IntroParagraph: props => <IntroParagraph {...props} />,
  Link: props => <InnerLink {...props} />,
  LinkCard: props => <LinkCard {...props} />,
  MediumMaterialsMeatSection: props => <MediumMaterialsMeatSection {...props} />,
  NoteSidebar: props => <NoteSidebar {...props} />,
  ol: props => <OrderedList {...props} />,
  p: props => <Paragraph {...props} />,
  PlayState: props => <PlayState {...props} />,
  pre: preProps => <pre {...preProps} />,
  ReadNext: props => <ReadNext {...props} />,
  ResearchBlock: props => <ResearchBlock {...props} />,
  ResearchItem: props => <ResearchItem {...props} />,
  ResourceBook: props => <ResourceBook {...props} />,
  SimpleCard: props => <SimpleCard {...props} />,
  SmallCenter: props => <SmallCenter {...props} />,
  Spacer: props => <Spacer {...props} />,
  Subtext: props => <Subtext {...props} />,
  ThreeImageGrid: props => <ThreeImageGrid {...props} />,
  Timeline: props => <Timeline {...props} />,
  Tooltip: props => <Tooltip {...props} />,
  Tween: props => <Tween {...props} />,
  TwoCol: props => <TwoCol {...props} />,
  TwoParagraph: props => <TwoParagraph {...props} />,
  ul: props => <UnorderedList {...props} />,
  // ------------- Single Use Components--------------- //
  Tools: Tools,
  Hardware: Hardware,
  GsapScroller: GsapScroller,
  TweenRedBigBox: TweenRedBigBox,
  TweenSpinningBox: TweenSpinningBox,
  TweenReverseSpinningBox: TweenReverseSpinningBox,
  TweenBlueRedBox: TweenBlueRedBox,
  StaticCSSPosition: StaticCSSPosition,
  RelativeCSSPosition: RelativeCSSPosition,
  AbsoluteCSSPosition: AbsoluteCSSPosition,
  FixedCSSPosition: FixedCSSPosition,
  StreamAnimation: StreamAnimation
}
