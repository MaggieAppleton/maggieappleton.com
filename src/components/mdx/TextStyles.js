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
  list-style-type: decimal;
  line-height: 1.8em;
  max-width: 660px;
  padding-left: 1rem;
  margin: 0.8rem 0;
  li {
    margin-bottom: 0.25rem;
  }
`

export const UnorderedList = styled.ul`
  list-style: inside;
  list-style-image: url(icons/radiobtn.svg);
  line-height: 1.8rem;
  max-width: 660px;
  padding-left: 1rem;
  margin: 0.8rem 0;
  li {
    margin-bottom: 0.25rem;
  }
`

export const H3 = styled.h3`
  text-align: left;
  max-width: 660px;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  line-height: ${rhythm(1.4)};
  letter-spacing: normal;
`

export const H4 = styled.h4`
  text-align: left;
  max-width: 660px;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  line-height: ${rhythm(1.2)};
  font-size: ${rhythm(0.8)};
  letter-spacing: normal;
`

export const H5 = styled.h5`
  text-align: left;
  max-width: 660px;
  margin: 0;
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  line-height: ${rhythm(1)};
  letter-spacing: normal;
`

export const H6 = styled.h6`
  text-align: left;
  max-width: 660px;
  margin: 0;
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  line-height: ${rhythm(0.9)};
`

export const Blockquote = styled.blockquote`
  text-align: center;
  & > p {
    max-width: 620px;
    text-align: center;
    margin: 1.8rem auto;
    font-size: 1.7rem;
    line-height: 2.4rem;
    display: inline-block;
  }
  & ::before,
  & ::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 3rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  padding: 0.8rem 0rem;
`
export const Center = styled.p`
  text-align: center;
  max-width: 660px;
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
  margin: 0;
  line-height: 1.6rem;
  font-size: 0.8rem;
  margin-top: 0.8rem;
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
        gridGap: '2rem',
        margin: '0 auto',
        gridTemplateColumns: '1fr',
        [bpMinSM]: { gridTemplateColumns: '1fr 1fr' },
        marginTop: '2rem',
        marginBottom: '4rem',
        maxWidth: '80%',
      })}
    >
      {props.children}
    </div>
  )
}
