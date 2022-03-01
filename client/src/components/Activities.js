import React from "react";


export const Activities = () => {

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    

    const itemStyle = () =>{
        return (
            {
                position: "relative",
                left: randomInteger(-90,90),
                top: randomInteger(-50,50),
                animationDelay: randomInteger(-1,-5) + "s",
            }
        )
    } 

    return (
        <div className="activities">
            <div className="activities__heading">
                НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
            </div>

            <div className="activities__items">
                <div className="activities__rows">
                    <div className="activities__item" style={itemStyle()}>Патриотика</div>
                    <div className="activities__item" style={itemStyle()}>Неформальное образование</div>
                    
                </div>
                <div className="activities__rows">
                    <div className="activities__item" style={itemStyle()}>Карьера</div>
                    <div className="activities__item" style={itemStyle()}>Добровольчество</div>
                    <div className="activities__item" style={itemStyle()}>Творчество</div>
                </div>
                <div className="activities__rows">
                    <div className="activities__item" style={itemStyle()}>Правозащита</div>
                    <div className="activities__item" style={itemStyle()}>Наука</div>
                    <div className="activities__item" style={itemStyle()}>Наставничество</div>
                </div>
                <div className="activities__rows">
                    <div className="activities__item" style={itemStyle()}>Медиа</div>
                    <div className="activities__item" style={itemStyle()}>Спорт</div>
                    <div className="activities__item" style={itemStyle()}>Абитуриенты</div>
                </div>
            </div>
        </div>
    )
}