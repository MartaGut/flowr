import React from "react";
import heroImg from "../assets/img/pl-hero.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return ( 
        <section className="banner-background cover-bgr" style={{backgroundImage: `url(${heroImg})`}}>
            <div className="banner-wrapper wrapper">
                <h1>Discover flowers around you</h1>
                <h2>Explore between more than 8.427 sightings</h2>
                <input className="banner-input" type="search" placeholder="Looking for something specific?"/>
                <FontAwesomeIcon className="banner-search-icon" icon={faSearch}/>
            </div>


        </section>
     );
}

export default Banner;