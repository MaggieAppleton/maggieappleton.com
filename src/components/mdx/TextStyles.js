import React from 'react'
import styled from '@emotion/styled'
import colors from '../../lib/colors'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM } from '../../lib/breakpoints'
import { rhythm } from '../../lib/typography'

export const Divider = styled.hr`
  text-align: center;
  width: 200px;
  margin: 60px auto;
  border: 1px solid ${colors.orange};
  background-color: ${colors.orange};
`

export const OrderedList = styled.ol`
  list-style: inside;
  list-style-type: decimal-leading-zero;
  line-height: 1.8em;
  max-width: 660px;
  margin: 0 auto;
  li {
    margin: 0.6em;
    margin-left: 1em;
  }
`

export const UnorderedList = styled.ul`
  display: grid;
  grid-gap: 0.6em;
  list-style: inside;
  list-style-image: url(icons/radiobtn.svg);
  line-height: 1.6em;
  max-width: 660px;
  padding-left: 1em;
  margin: 1em auto;
  li {
    margin-bottom: 0.4em;
  }
`

export const H3 = styled.h3`
  text-align: left;
  max-width: 660px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 0.4em;
  line-height: ${rhythm(1.4)};
`

export const H4 = styled.h4`
  text-align: left;
  max-width: 660px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 0.4em;
  line-height: ${rhythm(1.2)};
  font-size: ${rhythm(0.8)};
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
  margin: 30px auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    text-align: center;
  }
`
export const SmallCenter = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { maxWidth: '70%' },
        maxWidth: '100%',
        margin: '0 auto',
        'h1, h2, h3, h4, p': {
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
