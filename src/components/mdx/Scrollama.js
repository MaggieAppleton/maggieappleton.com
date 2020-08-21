import { useState, React }  from 'react';
// import { css } from '@emotion/core'
import { Scrollama, Step } from 'react-scrollama';


export const ScrollController = ({ onStepEnter, children }) => {
  return (
    <Scrollama onStepEnter={onStepEnter}>
        {children}
    </Scrollama>
  )
}

export const ScrollStep = ({ data, children }) => {
  return (
    <Step data={data}>
        {children}
    </Step>
  )
}