import './App.css';
import {InputText} from 'primereact/inputtext';


function App() {
    return (
        <div className="App">
            <div className="p-grid nested-grid p-jc-center vertical-container p-ai-center centerbox">
                <div className="p-grid p-jc-center p-shadow-10 p-p-3">
                    <InputText className="p-col-8 p-mb-3"/>
                    <InputText className="p-col-8"/>

                    <span className="p-input-icon-left p-col-8">
                        <i className="pi pi-search"/>
                        <InputText placeholder="Search"/>
                    </span>
                </div>



            </div>
        </div>
    );
}

export default App;
