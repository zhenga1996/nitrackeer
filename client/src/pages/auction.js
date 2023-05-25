import { useState, useEffect } from "react";
import axios from "axios";
import { toProperCase, nFormatter } from "../functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGrip, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Loading } from "./loading";

export const Auction = () => {
    const [items, setItems] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [view, setView] = useState("list-view");

    // List control
    useEffect(() => {
        axios.get('https://api.slothpixel.me/api/skyblock/auctions')
        .then(res => {
            setItems([["Hyperion", 1, 2, 3, 4, 5]])
            setFiltered([["Hyperion", 1, 2, 3, 4, 5]])
        })
        .catch(err => console.log(err));
    }, [])

    // Control search bar
    const searchChange = (event) => {
        setSearch(event.target.value);
    };
    const searchSubmit = (event) => {
        event.preventDefault();
        setFiltered(items.filter(item => item[0].toLowerCase().includes(search.toLowerCase())));
    };
    
    const imageOnError = (event) => {
        event.currentTarget.src = "https://sky.lea.moe/item/BOOK";
        event.currentTarget.className = "error";
        event.currentTarget.onError = null;
    };

    if (!items.length) return <Loading />;

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
            <input type="text" value={search} onChange={ searchChange } placeholder="Enter item name here"/>
            <input className="search" type="submit" value="Search" />
        </form>

        <div className="view_main">
            <div className={ "view_wrap " + view }>
                { filtered.map((item) => {
                    return (<div className="view_item" key={ item[1] }>
                        <div className="vi_left">
                            <img src={ "https://sky.lea.moe/item/BOOK" } alt="product" onError={ imageOnError }/>
                        </div>
                        <div className="vi_right">  
                            <p className="title">{ item[0] }</p>
                            {
                                view === "list-view" ?
                                <p className="content">
                                    <strong> Insta Sell: </strong> { item[2] } coins&emsp;&ensp;
                                    <strong> Weekly Sell: </strong>{ item[3] }&emsp;&ensp;
                                    <strong> Insta Buy: </strong>{ item[4] } coins&emsp;&ensp;
                                    <strong> Weekly Buy: </strong>{ item[5] }
                                </p> :
                                <p className="content">
                                    <p className="content">Insta Sell Price: { item[2] } coins</p>
                                    <p className="content">Weekly Insta Sell: { item[3] }</p>
                                    <p className="content">Insta Buy Price: { item[4] } coins</p>
                                    <p className="content">Weekly Insta Buy: { item[5] }</p>
                                </p>
                            }
                            <div className="btn">View More</div>
                        </div>
                    </div>);
                })}
            </div>
        </div>
    </div>);
};