import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/shift-away.css'
import Note from '../../../components/Note'
import components from '../../../components/mdx'
const AnchorTag = ({ href, popups = {}, ...restProps }) => {
  if (!href.match(/^http/))
    return (
      <Tippy
        content={popups[href.replace(/^\//, '')]}
        placement="top"
        animation="shift-away"
      >
        <Link {...restProps} to={href} />
      </Tippy>
    )
  return (
    <Tippy
      placement="top"
      animation="shift-away"
      maxWidth="none"
      content={<span>{href}</span>}
    >
      <a {...restProps} href={href} />
    </Tippy>
  )
}

const BrainNote = ({ note }) => {
  const { site } = useStaticQuery(graphql`
    query BrainNoteStaticQuery {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
          keywords
        }
      }
    }
  `)
  let references = []
  let referenceBlock
  if (note.inboundReferencePreviews != null) {
    references = note.inboundReferencePreviews.map(ref => (
      <li>
        <a href={ref.source}>{ref.source}</a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ))

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h2>Linked References</h2>
          <ul>{references}</ul>
        </>
      )
    }
  }

  const bidirectionalLinkPreviews = {}
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter(reference => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        bidirectionalLinkPreviews[ln.slug] = (
          <div id={ln.slug}>
            <h5>{ln.title}</h5>
            <p>{ln.childMdx.excerpt}</p>
          </div>
        )
      })
  }

  const AnchorTagWithPreviews = props => (
    <components.a
      {...props}
      bidirectionalLinkPreviews={bidirectionalLinkPreviews}
    />
  )
  return (
    <MDXProvider components={{ ...components, a: AnchorTagWithPreviews }}>
      <Note note={note} site={site} />
    </MDXProvider>
  )
}

export default BrainNote
