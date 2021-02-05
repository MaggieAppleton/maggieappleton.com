import React from 'react'
import styled from '@emotion/styled'
import colors from '../../lib/colors'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM } from '../../lib/breakpoints'
import { rhythm } from '../../lib/typography'

export const Divider = styled.hr`
  text-align: center;
  width: 240px;
  margin: 4em auto;
  border: 0px solid ${colors.lightOrange};
  background-color: ${colors.lightOrange};
`

export const OrderedList = styled.ol`
  list-style: inside;
  list-style-type: decimal-leading-zero;
  line-height: 1.8em;
  max-width: 660px;
  min-width: 360px;
  padding-left: 1em;
  margin: 0.8em 0;
  li {
    margin-bottom: 0.25em;
  }
`

export const UnorderedList = styled.ul`
  list-style: inside;
  list-style-image: url(icons/radiobtn.svg);
  line-height: 1.8em;
  max-width: 660px;
  min-width: 360px;
  padding-left: 1em;
  margin: 0.8em 0;
  li {
    margin-bottom: 0.25em;
  }
`

export const H3 = styled.h3`
  text-align: left;
  max-width: 660px;
  min-width: 360px;
  margin: 0;
  margin-top: 1em;
  margin-bottom: 0.4em;
  line-height: ${rhythm(1.4)};
  letter-spacing: normal;
`

export const H4 = styled.h4`
  text-align: left;
  max-width: 660px;
  min-width: 360px;
  margin: 0;
  margin-top: 1em;
  margin-bottom: 0.4em;
  line-height: ${rhythm(1.2)};
  font-size: ${rhythm(0.8)};
  letter-spacing: normal;
`

export const H5 = styled.h5`
  text-align: left;
  max-width: 660px;
  min-width: 360px;
  margin: 0;
  margin-top: 0.8em;
  margin-bottom: 0.4em;
  line-height: ${rhythm(1)};
  letter-spacing: normal;
`

export const H6 = styled.h6`
  text-align: left;
  max-width: 660px;
  min-width: 360px;
  margin: 0;
  margin-top: 0.8em;
  margin-bottom: 0.4em;
  line-height: ${rhythm(0.9)};
`

export const Blockquote = styled.blockquote`
  text-align: center;
  & > p {
    max-width: 620px;
    text-align: center;
    margin: 0.8em auto;
    font-size: 1.7em;
    line-height: 1.4em;
    display: inline-block;
  }
  & ::before,
  & ::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 3em;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  padding: 0.8em 0em;
`
export const Center = styled.p`
  text-align: center;
  max-width: 660px;
  min-width: 360px;
  margin: 30px auto;
  max-width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    text-align: center;
    margin: 30px auto;
  }
`
export const Subtext = styled.p`
  text-align: ${props => props.center ? 'center' : 'left'};
  max-width: 660px;
  min-width: 360px;
  margin: 0;
  line-height: 1.6em;
  font-size: 0.8em;
  margin-top: 0.8em;
`

export const SmallCenter = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { maxWidth: '70%' },
        maxWidth: '100%',
        margin: '0 auto',
        'h1, h2, h3, h4, h5, h6, p': {
          textAlign: 'center',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export const TwoParagraph = props => {
  return (
    <div
      css={css({
        display: 'grid',
        gridGap: '2em',
        margin: '0 auto',
        gridTemplateColumns: '1fr',
        [bpMinSM]: { gridTemplateColumns: '1fr 1fr' },
        marginTop: '2em',
        marginBottom: '4em',
        maxWidth: '80%',
      })}
    >
      {props.children}
    </div>
  )
}
