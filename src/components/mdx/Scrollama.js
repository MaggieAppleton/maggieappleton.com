import { useState, React }  from 'react';
import { css } from '@emotion/core'
import { Scrollama, Step } from 'react-scrollama';

export const ScrollamaDemo = () => {
    const [currentStep, setCurrentStep] = useState(null);
  
    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the  of the step.
    const onStepEnter = ({ data }) => {
      setCurrentStep(data);
    };
    return (
      <div style={{ margin: '50vh 0', background: 'skyblue' }}>
        <Scrollama onStepEnter={onStepEnter}>
          {['Hello', 'Goodbye', 8, 2].map((index, step) => (
            <Step data={step} key={index}>
              <div
                style={{
                  margin: '50vh 0',
                  border: '1px solid gray',
                  opacity: currentStep === step ? 1 : 0.2,
                }}
              >
                I'm a Scrollama Step of  {step}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    );
  };
  
  export default ScrollamaDemo;