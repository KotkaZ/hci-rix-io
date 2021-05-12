import "./listPmsView.css";
import React, {Component} from "react";
import PrePm from "../../components/prePm/prePm";

export default class ListPmsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatPartners: [
                {
                    imgSrc: "https://i.redd.it/v0caqchbtn741.jpg",
                    name: "Unga Punga",
                },
                {
                    imgSrc: "http://dose.ca/wp-content/uploads/2014/01/a98532_profile-pic_2.jpg",
                    name: "Tugev Juhan",
                },
                {
                    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU",
                    name: "Lihtsalt Tanel",
                },
                {
                    imgSrc: "https://d2eoq4xox7ijpx.cloudfront.net/cdn_asset/120/wp-content/uploads/2014/12/shutterstock_107540021.jpg",
                    name: "Rõõmus Juss",
                },
                {
                    imgSrc: "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png",
                    name: "Kahtlane Kalle",
                },
                {
                    imgSrc: "https://i.ytimg.com/vi/QUvLZeDgU-c/hqdefault.jpg",
                    name: "Peremees Anne",
                },
                {
                    imgSrc: "https://image.shutterstock.com/image-illustration/anonymous-male-profile-picture-silhouette-260nw-149293433.jpg",
                    name: "Anonüümne Toomas",
                },
            ]
        };
    }

    render() {
        const items = []

        for (const item of this.state.chatPartners) {
            items.push(<PrePm imgSrc={item.imgSrc} name={item.name}/>)
        }

        return (
            <div className="ListPmsView p-grid p-justify-center">
                <div className={"p-col-12 p-md-9"}>
                    {items}
                </div>
            </div>

        );
    }
}
