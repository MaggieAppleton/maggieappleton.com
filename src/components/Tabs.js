import styled from '@emotion/styled'

export const Tabs = styled.div`
    overflow: hidden;
    height: auto;
    width: 100%;
    margin-top: 2.5em;
    display: flex;
    justify-content: space-around;
`

export const Tab = styled.button`
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  color: black;
  border: ${props => (props.activeTab ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.activeTab ? "none" : "")};
  background-color: ${props => (props.activeTab ? "blue" : "white")};
  height: ${props => (props.activeTab ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`

export const TabContent = styled.div`
  ${props => (props.activeTab ? "" : "display:none")}
`