import { useState, React }  from 'react';
// import { css } from '@emotion/core'
import { Scrollama, Step } from 'react-scrollama';

const narration = [
    {
        title: 'Materials',
        text: 'Materials are the physical tools you need to draw with. iPads are one option. Staedler felt pens and moleskines are another. Copic markers in Cottonwood Arts sketchbooks. Compressed charcoal on Canson coldpress paper. Progressos on newsprint.'
    },
    {
        title: 'Medium',
        text: "By medium I mean the way we communicate. When we're drawing our medium is visual language. Just like written essays or spoken rhetoric or programming in Python, it has it's own syntax and style and set of techniques. Composition. Value. Contrast. Light. Shadows. Colour. Form. Perspective. 3D Construction. Line weight. Emphasis. Balance. Mastering the medium is the true struggle of drawing. Not picking an iPad or app or brand of pen. Almost everyone focuses on the material because they don't understand the medium. The medium is hard."
    },
    {
        title: 'Meat',
        text: 'The meat is the idea itself.'
    },
]

export const ScrollyTest = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const onStepEnter = ({ data, direction, element }) => {
        console.log({data, direction, element})
        setCurrentStep(data)
    }
 
    return (
        <div style={{ margin: '10vh 0', border: '2px dashed skyblue', height: '300vh' }}>
        <div style={{ position: 'sticky', top: '10vh', border: '1px solid orchid', height: '30vh' }}><h2>{narration[currentStep].title}</h2></div>
        <Scrollama onStepEnter={onStepEnter} offset={0.3} debug>
            {narration.map((narration, index) => {
            return (
                <Step data={index} key={index}>
                    <div style={{
                        margin: '50vh 0',
                        border: '1px solid gray',
                        opacity: currentStep === index ? 1 : 0.1,
                    }}>
                        <h2>{narration.title}</h2>
                        <p>{narration.text}</p>
                    </div>
                </Step>
            )})}
        </Scrollama>
        </div>
    )

}
