import { useState, useEffect } from "react";
import axios from "axios";
import { toProperCase, nFormatter } from "../functions";

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
                const id = value.name ? value.name : toProperCase(stats.productId);
                if (!key.includes("ENCHANTMENT")) {
                    list.push([
                        id,
                        stats.productId,
                        nFormatter(stats.sellPrice, 1),
                        nFormatter(stats.sellMovingWeek, 1),
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
                <li className="li-list" data-view="list-view">List View</li>
                <li className="li-grid">Grid View</li>
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
                            <p className="content">Insta Sell Price: { item[2] } coins</p>
                            <p className="content">Weekly Insta Sell: { item[3] }</p>
                            <p className="content">Insta Buy Price: { item[4] } coins</p>
                            <p className="content">Weekly Insta Buy: { item[5] }</p>
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
                            <p className="content">Insta Sell Price: { item[2] } coins</p>
                            <p className="content">Weekly Insta Sell: { item[3] }</p>
                            <p className="content">Insta Buy Price: { item[4] } coins</p>
                            <p className="content">Weekly Insta Buy: { item[5] }</p>
                            <div className="btn">View More</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>);
};