import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/shift-away.css'

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

  const popups = {}
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter(reference => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = (
          <div id={ln.slug}>
            <h5>{ln.title}</h5>
            <p>{ln.childMdx.excerpt}</p>
          </div>
        )
      })
  }

  const AnchorTagWithPopups = props => <AnchorTag {...props} popups={popups} />

  console.log(note.childMdx.body)
  return (
    <MDXProvider components={{ a: AnchorTagWithPopups }}>
      <div id="brainNote">
        <h1>{note.title}</h1>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        {referenceBlock}
      </div>
    </MDXProvider>
  )
}

export default BrainNote
