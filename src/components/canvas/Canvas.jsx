import React from 'react'
import useCanvas from '../../components/canvas/UseCanvas'


const Canvas = (props) => {
    const { draw, ...rest } = props
    const ref = useCanvas(draw)


    return (
        <canvas ref={ref} {...rest} />
    )
}

export default Canvas