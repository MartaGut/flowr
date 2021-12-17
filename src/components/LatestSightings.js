import React from "react";
import { fetchSightings } from "../actions";
import { useEffect } from 'react';
import { connect, useDispatch } from "react-redux";

function LatestSightings(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSightings());
    }, []);

    console.log(props);

    return (
        <div>
            <h2>Sighting List</h2>
            <h3>Explore between more than 8.427 sightings</h3>
            {props?.sighting?.sightings_list?.map((sighting) => (
                <div key={sighting.id}>
                    <button></button>
                    <img src={sighting.picture} alt="Sighting" />
                </div>
            ))
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sighting: state.sighting
    }
}

export default connect(mapStateToProps, { fetchSightings })(LatestSightings);