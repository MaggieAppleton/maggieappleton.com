import React from 'react';
import { css } from '@emotion/core'
import { Controller, Scene } from 'react-scrollmagic';

export const ScrollController = props => {
  return (
    <>
    <div  css={css({
      height: '80vh',
      width: '200vw',
      marginLeft: '-50%',
      marginRight: '-50%',
      background: 'lightgrey',
    })} />
    <Controller>
      {props.children}
    </Controller>
    <div  css={css({
      height: '80vh',
      width: '200vw',
      marginLeft: '-50%',
      marginRight: '-50%',
      background: 'lightgrey',
    })} />
    </>
  )
}

export const ScrollSticky = props => {
  return (
      <Scene duration={props.duration} pin={true} enabled={true}>
           <div css={css({
        margin: '30px', padding: '30px', 
      })}> {props.children}</div>
      </Scene>
  )
}