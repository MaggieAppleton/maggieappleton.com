import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { lighten, darken } from 'polished'
import { Global, css } from '@emotion/core'
import { ThemeProvider, themes } from './Theming'
import { bpMaxSM } from '../lib/breakpoints'
import Header from './Header/'
import ResetStyles from '../lib/reset'
import { fonts, rhythm } from '../lib/typography'
import config from '../../config/website'
import Footer from '../components/Footer'

//----------------------           CSS ---------------------- //
const getGlobalStyles = theme => {
  return css`
    body {
    counter-reset: sidenote-counter;
    padding: 0.4em;
    background-image: linear-gradient(180deg, ${theme.colors.white} 0%, ${
    theme.colors.white
  } 88%, ${theme.colors.offWhite} 100%);
    }
    &::selection {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
    a {
      color: ${theme.colors.blue};
      transition: 0.4s;
      text-decoration: none;
      &:hover,
      &:focus {
        color: ${theme.colors.orange};
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      a {
        color: ${theme.colors.blue};
        &:hover,
        &:focus {
          color: ${theme.colors.orange};
        }
      }
    }
    span {
      word-wrap: break-word;
      white-space: pre-line;
      overflow-wrap: break-word;
    }
    ${bpMaxSM} {
      p,
      em,
      strong, code {
        font-size: 90%;
      }
      h1 {
        font-size: ${rhythm(1.7)};
      }
      h2 {
        font-size: ${rhythm(1)};
      }
      h3 {
        font-size: ${rhythm(0.8)};
      }
    }
    hr {
      margin: 50px 0;
      border: none;
      border-top: 1px solid ${theme.colors.gray};
      background: none;
    }
    em {
      font-family: ${fonts.regularItalic};
    }
    mark {
      background-color: ${lighten(0.15,theme.colors.lightOrange)};
      padding: 1px 8px;
      border-radius: 4px;
    }
    strong {
      em {
        font-family: ${fonts.semiboldItalic};
      }
    }
    input {
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};
      padding: 5px 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      font-family: ${fonts.regular};
      margin-top: 5px;
      ::placeholder {
        opacity: 0.4;
      }
    }
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
      padding: 1em;
    }
    iframe {
      max-width: 100%;
    }
    button {
      border-radius: 4px;
      background-color: ${darken(0.04, theme.colors.lightOrange)};
      border: none;
      color: ${theme.colors.white};
      font-family: ${fonts.walsheim};
      padding: 8px 16px;
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      transition: all 400ms;
      :hover {
        background: ${theme.colors.lightOrange};
        border: 1px solid ${darken(0.05, theme.colors.lightOrange)};
        transform: translateY(-2px) scale(1.01);
        transition: all 400ms;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.08);
      }
    }
    .twitter-tweet, .twitter-tweet-rendered {
      margin: 40px auto;
      align-content: center;
    }
    code {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 500;
      position: relative;
      display: inline-block;
      padding: 2px 8px;
      margin: 0 4px;
      ::after {
        content: "";
        position: absolute;
        top: 0px;
        left: -1px;
        right: -1px;
        border-radius: 4px;
        bottom: 0px;
        opacity: 0.12;
        background: gray;
      }
      }
    }
    pre {
      margin: 0.6em auto;
      overflow-x: auto;
      border-radius: 4px;
      clear: both;
      /* Track */
      ::-webkit-scrollbar {
        width: 100%;
        height: 5px;
        border-radius: 0 0 5px 5px;
      }
      ::-webkit-scrollbar-track {
        background: ${theme.colors.offWhite};
        border-radius: 0 0 4px 4px;
        border: 1px solid ${theme.colors.offWhite};
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.lightestGrey};
        border-radius: 5px;
      }
    }
  `
}

//----------------------           Main Components ---------------------- //
export default ({
  site,
  frontmatter = {},
  children,
  noFooter,
  noSubscribeForm,
}) => {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }
  }

  const [themeName, setTheme] = useState(initializeTheme)

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)
  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
  }
  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={ResetStyles()} />
        <Global styles={getGlobalStyles(theme)} />

        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        >
          <html lang="en" />
          <noscript>This site runs best with JavaScript enabled.</noscript>
          {/* <script src="https://hypothes.is/embed.js" async></script> */}
        </Helmet>
        <Header />
        <Fragment>{children}</Fragment>
        {!noFooter && (
          <Footer
            author={site.siteMetadata.author.name}
            noSubscribeForm={noSubscribeForm}
          />
        )}
      </Fragment>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
