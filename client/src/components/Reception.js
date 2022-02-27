import React, { useState } from 'react'



export const Reception = () => {

    const [isPicture, setIsPicture] = useState(false)


    return (
        <div className="reception">
            <div className={"reception__photo " + (isPicture && "reception__photo-visible" )}></div>
            
            <div className="reception__menu">
                
                <div className="reception__menu-container">
                    <div className="reception__btn" 
                        onMouseOver={() => {setIsPicture(true)}}
                        onMouseLeave={() => {setIsPicture(false)}}
                    >
                        <button>Приемная ССА</button>
                    </div>

                    <div className="receprion__label">
                        Всегда на связи!
                    </div>
                </div>
            </div>
        </div>
    )
}