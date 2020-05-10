import React from 'react'
import styled from '@emotion/styled'
import colors from '../../lib/colors'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM } from '../../lib/breakpoints'

export const Divider = styled.hr`
  text-align: center;
  width: 200px;
  margin: 60px auto;
  border: 1px solid ${colors.orange};
  background-color: ${colors.orange};
`

export const OrderedList = styled.ol`
  list-style: decimal-leading-zero inside;
  line-height: 1.8em;
  max-width: 660px;
  margin: 0 auto;
  li {
    margin-bottom: 1em;
  }
`

export const UnorderedList = styled.ul`
  list-style: inside;
  list-style-image: url(icons/radiobtn.svg);
  line-height: 1.8em;
  max-width: 660px;
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
`

export const H4 = styled.h4`
  text-align: left;
  max-width: 660px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 0.4em;
`

export const Blockquote = styled.blockquote`
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
`
export const SmallCenter = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { maxWidth: '70%' },
        maxWidth: '100%',
        margin: '0 auto',
      })}
    >
      {props.children}
    </div>
  )
}
