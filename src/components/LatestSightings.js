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
            {props?.sighting?.sightings_list?.map((sighting) => (
                <div key={sighting.id}>
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