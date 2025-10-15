import React from 'react'
import { Rectangle82, Rectangle83, Ellipse81, Ellipse82 } from './gradienttop'

function Gradiant() {
    return (
        <div>
            <div className='border w-full h-[500px] relative overflow-hidden'>
                <div
                    style={{
                        position: "absolute",
                        width: "2038px",
                        height: "1509px",
                        left: "calc(50% - 2038px/2 + 44px)",
                        //  top: "470px",
                        background:
                            "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
                        opacity: 0.4,
                         filter: "blur(37.2px)",
                        zIndex: 0,
                    }}
                >

                </div>
                <div >
                </div>
            </div>

            {/* <Rectangle83/> */}

        </div>
    )
}

export default Gradiant