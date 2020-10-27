import React from 'react';
import './Banner.scss';
import { useDataLayerValue } from './DataLayer';

function Banner() {
    const [{discoverWeekly}, dispatch] = useDataLayerValue();

    return(
        <div className="banner">
            <img src={discoverWeekly?.images[0].url} alt=""/>
            <div className="banner__infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discoverWeekly?.description}</p>
            </div>
        </div>
    )
}

export default Banner;