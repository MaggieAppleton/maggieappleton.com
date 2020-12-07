import styled from '@emotion/styled'

export const Tabs = styled.div`
    overflow: hidden;
    height: auto;
    width: 100%;
`

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border: ${props => (props.activeTab ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.activeTab ? "none" : "")};
  background-color: ${props => (props.activeTab ? "white" : "lightgray")};
  height: ${props => (props.activeTab ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`;
export const TabContent = styled.div`
  ${props => (props.activeTab ? "" : "display:none")}
`;