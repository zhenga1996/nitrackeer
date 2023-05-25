import { useState, useEffect } from "react";
import axios from "axios";
import { toIdCase, imageOnError } from "../functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGrip, faSearch } from '@fortawesome/free-solid-svg-icons'

export const Auction = () => {
    const [view, setView] = useState("list-view");
    const [search, setSearch] = useState("");
    const [player, setPlayer] = useState("Volcaronitee");
    const [items, setItems] = useState([]);

    // Control search bar
    const searchChange = (event) => {
        setSearch(event.target.value);
    };
    const searchSubmit = (event) => {
        event.preventDefault();
        setPlayer(search);
        axios.get("https://sky.coflnet.com/api/auctions/tag/" + search + "/active/bin")
        .then(res => {
            let list = [];
            res.data.forEach(auction => {
                list.push([
                    auction.itemName,
                    auction.uuid,
                    auction.tag
                ]);
            });
            setItems(list);
        }).catch(err => alert(err));
    };

    return (
    <div className="wrapper">
        <div className="links">
            <ul>
                <li className="li-list" onClick={ () => setView("list-view") }>
                    <FontAwesomeIcon icon={ faList }/> List View</li>
                <li className="li-grid" onClick={ () => setView("grid-view") }>
                    <FontAwesomeIcon icon={ faGrip }/> Grid View</li>
            </ul>
        </div>

        <form onSubmit={ searchSubmit }>
            <label><FontAwesomeIcon icon={ faSearch }/>&ensp;</label>
            <input type="text" value={search} onChange={ searchChange } placeholder="Enter username here"/>
            <input className="search" type="submit" value="Search" />
        </form>

        <div className="view_main">
            { /* Player auction information display */ }
            <div className={ "view_wrap " + view }>
                { items.map((item) => {
                    return (<div className="view_item" key={ item[1] }>
                        <div className="vi_left">
                            <img src={ "https://sky.lea.moe/item/" + toIdCase(item[2]) } alt="product" onError={ imageOnError }/>
                        </div>
                        <div className="vi_right">  
                            <p className="title">{ item[0] }</p>
                            {
                                view === "list-view" ?
                                <p className="content">
                                    <strong> ID: </strong>{ item[1] } &emsp;&ensp;
                                </p> :
                                <p className="content">
                                    <p className="content">{ item[1] }</p>
                                </p>
                            }
                            <a className="btn" href={ "/auction/"+item[1] }>View More</a>
                        </div>
                    </div>);
                })}
            </div>
        </div>
    </div>);
};