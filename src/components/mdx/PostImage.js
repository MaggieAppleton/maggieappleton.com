import styled from '@emotion/styled'

export default styled.img`
  max-width: ${props => (props.small ? '80%' : '100%')};
  display: flex;
  align-self: center;
  margin: 0 auto;
  border-radius: 6px;
  margin-bottom: 0;
  margin-top: 1em;
  z-index: 1;
`
