import React from "react";
import { useEffect } from 'react';
import { useDispatch, connect } from "react-redux";
import { fetchFLowers } from "../actions";
import star from "../assets/img/star.png";

function FlowerList(props) {

    const dispatch = useDispatch();

    // const nesto = useSelector(state => state.flowers.flowers_list);
    // console.log(nesto)

    useEffect(() => {
        dispatch(fetchFLowers());
    }, [])

    // console.log(props.flower)
    return (
        <div className="wrapper">
            <div className="flowers-container">
                {props?.flower?.flowers_list?.map((flower) => (
                    < div className="flowers-item" key={flower.id}
                        style={{ backgroundImage: `url('${flower.profile_picture}')` }}
                    >
                        <div className="flowers-item-top">
                            {/* <img className="flowers-img" src={flower.profile_picture} alt="Flowers" /> */}
                            <img className="star-img" src={star} alt="Flowers" />
                        </div>
                        <div className="flowers-item-bottom">
                            <h3 className="flower-name">{flower.name}</h3>
                            <h4 className="latin-name">{flower.latin_name}</h4>
                            <button className="sightings-btn btn-inactive">{flower.sightings} Sightings</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        flower: state.flowers
    }
}

export default connect(mapStateToProps, { fetchFLowers })(FlowerList);