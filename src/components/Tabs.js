import styled from '@emotion/styled'

export const Tabs = styled.div`
    overflow: hidden;
    height: auto;
    width: 95%;
    margin: 2.5em auto 0;
    display: flex;
    justify-content: space-around;
`

export const Tab = styled.button`
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  color: ${props => (props.activeTab ? "orange" : "gray")};
  border-radius: 0;
  border: none;
  border-bottom: ${props => (props.activeTab ? "3px solid orange" : "1px solid lightgray")};
  background-color: white;
  height: ${props => (props.activeTab ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`

export const TabContent = styled.div`
  ${props => (props.activeTab ? "" : "display:none")}
`