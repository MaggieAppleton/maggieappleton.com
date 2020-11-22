import React, { useRef, useEffect} from 'react'
import * as d3 from "d3"

// https://wattenberger.com/blog/react-and-d3

const D3Experiments = () => {
    const svgRef = useRef()

    useEffect(() => {
      const svgElement = d3.select(svgRef.current)
      svgElement.append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r",  50)
        .attr('fill', 'black')
    }, [])

    return (
        <div class="test">
            <svg ref={svgRef} width="100" height="100" viewBox="0 0 100 100" />
        </div>
    )
}

export default D3Experiments



