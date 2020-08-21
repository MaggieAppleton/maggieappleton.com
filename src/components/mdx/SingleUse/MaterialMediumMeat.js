import { useState, React }  from 'react';
// import { css } from '@emotion/core'
import { Scrollama, Step } from 'react-scrollama';

const narration = [
    {
        key: 1,
        title: 'Materials',
        text: 'Materials are the physical tools you need to draw with. iPads are one option. Staedler felt pens and moleskines are another. Copic markers in Cottonwood Arts sketchbooks. Compressed charcoal on Canson coldpress paper. Progressos on newsprint.'
    },
    {
        key: 2,
        title: 'Medium',
        text: "By medium I mean the way we communicate. When we're drawing our medium is visual language. Just like written essays or spoken rhetoric or programming in Python, it has it's own syntax and style and set of techniques. Composition. Value. Contrast. Light. Shadows. Colour. Form. Perspective. 3D Construction. Line weight. Emphasis. Balance. Mastering the medium is the true struggle of drawing. Not picking an iPad or app or brand of pen. Almost everyone focuses on the material because they don't understand the medium. The medium is hard."
    },
    {
        key: 3,
        title: 'Meat',
        text: 'The meat is the idea itself.'
    },
]

export const MaterialMediumMeat = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null)

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data)
    }

    return (
        <div style={{ margin: '10vh 0', border: '2px dashed skyblue', height: '300vh' }}>
        <div style={{ position: 'sticky', top: '10vh', border: '1px solid orchid', height: '30vh' }}><h2>The {currentStepIndex}</h2></div>
        <Scrollama onStepEnter={onStepEnter} offset={0.6}>
            {narration.map(narration => (
                <Step data={narration.key} key={narration.key}>
                    <div style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === narration.key ? 1 : 0.1,
              }}>
                        <h2>{narration.title}</h2>
                        <p>{narration.text}</p>
                    </div>
                </Step>
            ))}
        </Scrollama>
        </div>
    )

}
