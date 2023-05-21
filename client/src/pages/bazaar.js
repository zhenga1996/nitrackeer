import { useState, useEffect } from "react";
import axios from "axios";
import { toProperCase, nFormatter } from "../functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons'

export const Bazaar = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://api.slothpixel.me/api/skyblock/bazaar')
        .then(res => {
            // Fomatting as array since I keep getting an error when using whole dictionary
            // Array indexes: [product_id, ]
            let list = [];
            for (const [key, value] of Object.entries(res.data)) {
                const stats = value.quick_status;
                if (!key.includes("ENCHANTMENT")) {
                    list.push([
                        toProperCase(stats.productId),
                        stats.productId,
                        nFormatter(stats.sellPrice, 1),
                        nFormatter(stats.sellsMovingWeek, 1),
                        nFormatter(stats.buyPrice, 1),
                        nFormatter(stats.buyMovingWeek, 1),
                    ])
                }
            }
            setItems(list);
        })
        .catch(err => console.log(err));
    }, [])

    // List / Grid Control
    var li_links = document.querySelectorAll(".links ul li");
    var view_wraps = document.querySelectorAll(".view_wrap");
    var list_view = document.querySelector(".list-view");
    var grid_view = document.querySelector(".grid-view");

    li_links.forEach(function(link){
        link.addEventListener("click", function(){
            li_links.forEach(function(link){
                link.classList.remove("active");
            })

            link.classList.add("active");

            var li_view = link.getAttribute("data-view");

            view_wraps.forEach(function(view){
                view.style.display = "none";
            })

            if(li_view == "list-view"){
                list_view.style.display = "block";
            }
            else{
                grid_view.style.display = "block";
            }
        })
    })

    if (!items.length) return null;

    return (
    <div className="wrapper">
        <div className="links">
            <ul>
                <li className="li-list" data-view="list-view">
                    <FontAwesomeIcon icon={faList} /> List View</li>
                <li className="li-grid">
                    <FontAwesomeIcon icon={faGrip} /> Grid View</li>
            </ul>
        </div>

        <div className="view_main">
            <div className="view_wrap list-view">
                { items.map((item) => {
                    return <div className="view_item">
                        <div className="vi_left">
                            <img src={ "https://sky.lea.moe/item/" + item[1] } alt="product"/>
                        </div>
                        <div className="vi_right">
                            <p className="title">{ item[0] }</p>
                            <p className="content">
                                Insta Buy: { item[2] }
                                Insta Sell: { item[3] }
                                Sell Volume: { item[4] }
                                Buy Volume: { item[5] }
                            </p>
                            <div className="btn">View More</div>
                        </div>
                    </div>
                })}
            </div>
            <div className="view_wrap grid-view">
                { items.map((item) => {
                    return <div className="view_item">
                        <div className="vi_left">
                            <img src={ "https://sky.lea.moe/item/" + item[1] } alt="product"/>
                        </div>
                        <div className="vi_right">
                            <p className="title">{ item[0] }</p>
                            <p className="content">
                                Insta Buy: { item[2] }
                                Insta Sell: { item[3] }
                                Sell Volume: { item[4] }
                                Buy Volume: { item[5] }
                            </p>
                            <div className="btn">View More</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>);
};