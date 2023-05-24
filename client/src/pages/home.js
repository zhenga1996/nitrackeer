import star from "../images/stars.png";
import moon from "../images/moon.png";
import mountain_behind from "../images/mountains_behind.png";
import mountain_front from "../images/mountains_front.png";
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        let stars = document.getElementById("stars");
        let moons = document.getElementById("moon");
        let mountain_behinds = document.getElementById("mountain_behind");
        let text = document.getElementById("text");
        let btn = document.getElementById("btn");
        let mountain_fronts = document.getElementById("mountain_front");

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moons.style.top = value * 1.05 + 'px';
            mountain_behinds.style.top = value * 0.5 + 'px';
            mountain_fronts.style.top = value * 0 + 'px';
            text.style.marginRight = value * 3 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
        })
    }, []);

    return (<body className="home">
        <section>
            <img src={ star } id="stars"/>
            <img src={ moon } id="moon"/>
            <img src={ mountain_behind } id="mountain_behind"/>
            <h2 id="text">Nitrackeer</h2>
            <a href="#sec" id="btn">Explore</a>
            <img src={ mountain_front } id="mountain_front"/>
        </section>
        <div class="sec" id="sec">
            <h2>Welcome to Nitrackeer</h2>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
            <p>Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</p>
        </div>
    </body>)
};