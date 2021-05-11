import "./pm.css";
import React from "react";

// <Pm text="Hello World!" time="15:15" date="12/12/12" type="{start|end}"/>
function Pm(props) {
    return (
        <div className="Pm p-d-block">
            <div className={`message ${props.type}-type p-p-3 p-grid p-justify-${props.type}`}>
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
