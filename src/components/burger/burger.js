import './burger.css';
import { Menu } from 'primereact/menu';
import React, { Component } from 'react';
import { Button } from 'primereact/button';


export default class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked1: true,
            checked2: false
        };


        this.items = [
            {
                items: [
                    {
                        label: <div className="p-ml-6 p-mt-2 p-mb-2"> Trending </div>
                    },
                    {
                        label: <div className="p-ml-6 p-mt-2 p-mb-2"> Software development </div>
                    },
                    {
                        label: <div className="p-ml-6 p-mt-2 p-mb-2"> Hardware </div>
                    },
                    {
                        label: <div className="p-ml-6 p-mt-2 p-mb-2"> Market </div>
                    },
                    {
                        label: <div className="p-ml-6 p-mt-2 p-mb-2"> Jobs / Career </div>
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div className="leftbox">
                <Button icon="pi pi-bars" className="p-button-lg"
                        onClick={(event) => this.menu.toggle(event)} aria-controls="popup_menu" aria-haspopup/>
                <Menu id="popup_menu" ref={el => this.menu = el} popup model={this.items}/>
            </div>
        );
    }
}
