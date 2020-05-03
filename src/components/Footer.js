import React from 'react'
import { css } from '@emotion/core'
import { fonts } from '../lib/typography'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, Instagram, Dribbble } from './Social'
import Container from './Container'

const Footer = ({ author, noSubscribeForm }) => (
  <footer
    css={css`
      margin-top: 3em;
    `}
  >
    <Container>
      {!noSubscribeForm && (
        <div>
          <SubscribeForm />
        </div>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 3em;
        `}
      >
        <div
          css={css`
            font-size: 0.8em;
            font-family: ${fonts.walsheim};
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div>
          <Twitter />
          <GitHub />
          <Dribbble />
          <Instagram />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
