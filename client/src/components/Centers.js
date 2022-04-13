import React from "react";
import CCK from '../media/imgs/CCK.svg'

export const Centers = () => {
    return (
        <div className="centers">
            <div className="centers-header"><p>Центры ССА</p></div>
            <div className="centers-table">
                <div className="centers-table-row">
                    <div className="CVnuK">
                        <div className="center-column">
                            <div className="convocation"><p>XI</p></div>
                            <div className="center-name">Центр Внутренних Коммуникаций</div>
                        </div>
                    </div>
                    <div className="CCK">
                        <div className="center-column">
                            <div className="convocation"><p>XI</p></div>
                            <div className="center-name">Центр Цифровых Коммуникаций</div>
                        </div>
                    </div>
                </div>
                <div className="centers-table-row">
                    <div className="CVK">
                        <div className="center-column">
                            <div className="convocation"><p>XI</p></div>
                            <div className="center-name">Центр Внешних Коммуникаций</div>
                        </div>
                    </div>
                    <div className="CMA">
                        <div className="center-column">
                            <div className="convocation"><p>XI</p></div>
                            <div className="center-name">Центр Маркетинга и Анализа</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}