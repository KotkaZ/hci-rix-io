import "./userpopup.css";
import { Menu } from "primereact/menu";
import { InputSwitch } from "primereact/inputswitch";
import React, { Component } from "react";
import { Avatar } from "primereact/avatar";
import history from "../../history";

export default class Userpopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      stylePath: "~primereact/resources/themes/saga-blue/theme.css",
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    var head = document.getElementsByTagName('head')[0];
    var scripts = head.getElementsByTagName('script')

    for (var i = scripts.length-1; scripts.length>0; i--) {
      scripts[i].remove()
      console.log(scripts)
    }

    console.log(scripts)
    if (prevState.darkMode !== this.state.darkMode) {
      if (!this.state.darkMode) {
        //ligthmode
        document.querySelectorAll("style").forEach(item => {
          if (item.innerText.length === 557260) {
            item.remove();
          }
          //console.log(item.innerText.length);
        });
        import("primereact/resources/themes/saga-blue/theme.css");
        console.log("Changed to light mode!");
      } else {
        //darkmode
        document.querySelectorAll("style").forEach(item => {
          if (item.innerText.length === 1) {
            //make it delete dark scheme vela blue
            item.remove();

          }
          //console.log(item.innerText.length);
        });
        import("primereact/resources/themes/luna-blue/theme.css");
        console.log("Changed to dark mode!");
      }
      console.log("darkmode status:", this.state.darkMode);
    }
  }

  items() {
    return [
      {
        label: "Lambi Lõdvik",
        items: [
          {
            label: "Profile",
            icon: "pi pi-users",
            command: () => history.push("/userProfile"),
          },
          {
            label: "Direct Messages",
            icon: "pi pi-comments",
            command: () => history.push("/userMessages"),
          },
          {
            label: (
              <div className="p-d-flex p-ai-center">
                <span className="p-mr-2">Dark Mode</span>
                <InputSwitch checked={this.state.darkMode} />
              </div>
            ),
            icon: "pi pi-moon",
            command: () => this.changeDarkmode(),
          },
          {
            label: "Settings",
            icon: "pi pi-cog",
            command: () => history.push("/userSettings"),
          },
          {
            label: "Log Out",
            icon: "pi pi-sign-out",
            command: () => {
              window.open("https://www.neti.ee/", "_self");
            },
          },
        ],
      },
    ];
  }

  render() {
    return (
      <div className="UserPopup p-d-flex p-ai-center">
        <h3
          className="avatar-name p-m-0 p-pr-2"
          onClick={event => this.menu.toggle(event)}
        >
          Lambi Lõdvik
        </h3>
        <Avatar
          shape="circle"
          size="large"
          image="https://i.guim.co.uk/img/media/976161556e63867b492868c15e86ea71b4165c52/0_165_5315_3189/master/5315.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b4e203c07941288dab171a18905ad374"
          onClick={event => this.menu.toggle(event)}
          aria-controls="popup_menu"
          aria-haspopup
          className="p-m-1"
        />
        <Menu
          id="popup_menu"
          ref={el => (this.menu = el)}
          popup
          model={this.items()}
        />
      </div>
    );
  }

  changeDarkmode() {
    this.setState({ darkMode: !this.state.darkMode });
  }
}
