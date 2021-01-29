import React from 'react'
import styled from '@emotion/styled'

const SidebarContainer = styled.div`
  top: 0px;
  float: right;
  height: calc(100vh - 0px);
  position: sticky;
  overflow: hidden;
  z-index: 1;
  display: flex;
  .sidebarContent {
    width: 250px;
    display: flex;
  }
`

const NoteSidebar = props => {
  return (
    <SidebarContainer>
      <div className="sidebarContent">{props.children}</div>
    </SidebarContainer>
  )
}

export default NoteSidebar
