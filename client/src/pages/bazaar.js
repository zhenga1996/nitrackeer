import { useState, useEffect } from "react";
import axios from "axios";

export const Bazaar = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://api.slothpixel.me/api/skyblock/bazaar')
        .then(res => {
            let list = [];
            for (const [key, value] of Object.entries(res.data)) {
                if (!key.includes("ENCHANTMENT"))
                    list.push(value.product_id)
            }
            setItems(list);
        })
        .catch(err => console.log(err));
    }, [])

    if (!items) return null;

    return (<div className = "container">
        {items.map((item) => (
            <div className = "box">
                <img
                    src={"https://sky.lea.moe/item/" + item}
                    className = "item"
                    alt = "item picture"
                />
                <h3> { item } </h3>
            </div>
        ))}
    </div>);
};