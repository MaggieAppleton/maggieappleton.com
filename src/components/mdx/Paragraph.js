import styled from '@emotion/styled'
import { fonts } from '../../lib/typography'

export const Paragraph = styled.p`
  text-align: left;
  max-width: 660px;
  margin: 0 auto;
  line-height: 1.8em;
  font-family: ${fonts.regular};
  margin-top: 1em;
  align-items: flex-start;
`

export const IntroParagraph = styled.p`
  :first-letter {
    font-family: ${fonts.bold};
    float: left;
    font-size: 4em;
    line-height: 0.65;
    margin: 0.1em 0.15em 0em 0;
  }
`
