import colors from '../lib/colors'
import styled from '@emotion/styled'

export const Tabs = styled.div`
    overflow: hidden;
    height: auto;
    width: 75%;
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
  font-size: 90%;
  color: ${props => (props.activeTab ? colors.orange : colors.grey)};
  border-radius: 0;
  border: none;
  border-bottom: ${props => (props.activeTab ? `2px solid ${colors.lightOrange}` : `1px solid ${colors.lightestGrey}`)};
  background-color: white;
  height: ${props => (props.activeTab ? "3em" : "2.6em; top:.4em")};
  transition: all 200ms ease-in-out;
  :hover {
    background-color: white;
    border: none;
    border-bottom: 1px solid ${colors.lightestGrey};
    color: ${colors.orange};
    box-shadow: none;
    transform: none;
  }
`

export const TabContent = styled.div`
  ${props => (props.activeTab ? "" : "display:none")}
`