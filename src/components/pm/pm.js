import "./pm.css";
import React from "react";

// <Pm text="Hello World!" time="15:15" date="12/12/12" type="start"/>
function Pm(props) {
    return (
        <div className="Pm">
            <div className={`message ${props.type}-type p-p-3 p-grid p-justify-${props.type} p-shadow-10`}>
                <table>
                    <tr>
                        <div className={`message-box p-p-3 p-mb-0 p-shadow-5`}>
                            <p className={`p-m-0`}> {props.text} </p>
                        </div>
                    </tr>
                    <tr>
                        <p className={`message-datetime p-m-0`}> {props.time} {props.date}</p>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Pm;
