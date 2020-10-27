import React from 'react';
import './Body.scss';
import Header from './Header';
import Banner from './Banner';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body( {spotify} ) {
    const [{discoverWeekly}, dispatch] = useDataLayerValue();

    return(
        <div className="body">
            <Header spotify={spotify}/>
            < Banner/>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {discoverWeekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;