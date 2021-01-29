import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useStaticQuery, graphql } from 'gatsby'
import 'tippy.js/animations/shift-away.css'
import Note from '../../../components/Note'
import components from '../../../components/mdx'
import { ReferenceBlock, ReferenceItem } from '../../../components/ReferenceBlock'


const BrainNote = ({ note }) => {

  //GraphQL Query
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

    //Declare the references array and the references block
  let references = []
  let referenceBlock

  // If the inbound note (eg. notes that point TO this note) is NOT null, map each inbound note's contents to a list item that links to the source and shows a preview of the HTML. This list item is assigned to the variable "references"
  //These are the notes that will show up in the references block
      // Turn this into a component
  if (note.inboundReferenceNotes != null) {
    references = note.inboundReferenceNotes.map(ref => (<ReferenceItem pageLink={ref.slug} pageTitle={ref.title} excerpt={ref.childMdx.excerpt} />))

    // If the number of inbound reference notes is longer than 0 list items, render a Reference Block.
    // Turn this into a component
    if (references.length > 0) {
      referenceBlock = <ReferenceBlock references={references} />
    }
  }

  // Declare a variable for Bidirectional Link Previews
  const bidirectionallinkpreviews = {}

  // If there are outbound reference notes (notes this note it pointing to), filter each note. Find the title, slug, and excerpt and map it to a preview component
   // Turn this into a component
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter(reference => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        bidirectionallinkpreviews[ln.slug] = (
          <div style={{ padding: '1em 0.6em' }} id={ln.slug}>
            <h2 style={{ margin: '0 0 0.4em 0', fontSize: '1.66em' }}>{ln.title}</h2>
            <p>{ln.childMdx.excerpt}</p>
          </div>
        )
      })
  }

  // Decalre a variable called 'Tippy Link with Previews' and assign it to a function component. The function takes in props, and returns a standard MDX link component. It assigned the bidirectionallinkpreviews variable to a new bidirectionallinkpreviews props
  const TippyLinkWithPreviews = props => (
    <components.a
      {...props}
      bidirectionallinkpreviews={bidirectionallinkpreviews}
    />
  )

  return (
    <MDXProvider components={{...components, a: TippyLinkWithPreviews }}>
      <Note referenceBlock={referenceBlock} note={note} site={site} />
    </MDXProvider>
  )
}

export default BrainNote
