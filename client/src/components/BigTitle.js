import React from 'react'



export const BigTitle = (props) => {

    return (
        <div style={{color: props.color}} className="big-title">
            <h1>
                {props.title}
            </h1>
        </div>
    )
}