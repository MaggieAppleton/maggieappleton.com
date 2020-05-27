import React from 'react'
import { graphql } from 'gatsby'
import BrainNote from '../components/BrainNote'

export default props => {
  return <BrainNote note={props.data.brainNote} />
}

export const query = graphql`
  query BrainNoteWithRefsBySlug($slug: String!) {
    brainNote(slug: { eq: $slug }) {
      slug
      title
      childMdx {
        body
      }
      inboundReferences
      inboundReferencePreviews {
        source
        previewHtml
      }

      outboundReferenceNotes {
        title
        slug
        childMdx {
          excerpt
        }
      }
    }
  }
`
