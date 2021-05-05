import './Userpopup.css';
import {Menu} from 'primereact/menu';
import {InputSwitch} from 'primereact/inputswitch';

function Userpopup() {
    return (
        <div className="UserPopup">
            <Menu model={[
                {
                    label: 'Lambi Lõdvik',
                    items: [
                        {
                            label: 'Profile',
                            icon: 'pi pi-users',
                        },
                        {
                            label: 'Direct Messages',
                            icon: 'pi pi-comments',
                        },
                        {
                            label: <div><span>Dark Mode   </span><InputSwitch /> </div>,
                            icon: 'pi pi-moon',
                        },
                        {
                            label: 'Settings',
                            icon: 'pi pi-cog',
                        },
                        {
                            label: 'Log Out',
                            icon: 'pi pi-sign-out',
                            command: () => {
                                console.log("Logout would happen!")
                            }
                        }
                    ]
                }
            ]}/>
        </div>
    );
}

export default Userpopup;