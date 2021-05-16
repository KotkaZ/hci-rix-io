import "./listPmsView.css";
import React, { Component } from "react";
import PrePm from "../../components/prePm/prePm";

export default class ListPmsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatPartners: [
        {
          imgSrc: "https://i.redd.it/v0caqchbtn741.jpg",
          name: "Unga Punga",
          date: "16/05/2021",
          lastText: "Deal!",
        },
        {
          imgSrc:
            "http://dose.ca/wp-content/uploads/2014/01/a98532_profile-pic_2.jpg",
          name: "Tugev Juhan",
          date: "14/05/2021",
          lastText: "Hello, I have GPU for sale!",
        },
        {
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU",
          name: "Lihtsalt Tanel",
          date: "10/05/2021",
          lastText: "I really enjoyed your guide!",
        },
        {
          imgSrc:
            "https://d2eoq4xox7ijpx.cloudfront.net/cdn_asset/120/wp-content/uploads/2014/12/shutterstock_107540021.jpg",
          name: "Rõõmus Juss",
          date: "9/04/2021",
          lastText: "Lorem ipsum",
        },
        {
          imgSrc: "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png",
          name: "Kahtlane Kalle",
          date: "1/04/2021",
          lastText: "Lorem ipsum",
        },
        {
          imgSrc: "https://i.ytimg.com/vi/QUvLZeDgU-c/hqdefault.jpg",
          name: "Peremees Anne",
          date: "19/03/2021",
          lastText: "Lorem ipsum",
        },
        {
          imgSrc:
            "https://image.shutterstock.com/image-illustration/anonymous-male-profile-picture-silhouette-260nw-149293433.jpg",
          name: "Anonüümne Toomas",
          date: "24/11/2020",
          lastText: "Lorem ipsum",
        },
      ],
    };
  }

  render() {
    const items = [];

    for (const item of this.state.chatPartners) {
      items.push(
        <PrePm
          imgSrc={item.imgSrc}
          name={item.name}
          date={item.date}
          lastText={item.lastText}
        />
      );
    }

    return (
      <div className="ListPmsView p-grid p-justify-center">
        <div className={"p-col-12 p-md-9"}>{items}</div>
      </div>
    );
  }
}
