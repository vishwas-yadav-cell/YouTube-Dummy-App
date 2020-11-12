import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AirplayIcon from '@material-ui/icons/Airplay';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <SidebarRow selected Icon={HomeIcon} title={'Home'} />
            <SidebarRow Icon={WhatshotIcon} title={'Trending'} />
            <SidebarRow Icon={SubscriptionsIcon} title={'Subscriptions'} />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title={'Library'} />
            <SidebarRow Icon={HistoryIcon} title={'History'} />
            <SidebarRow Icon={AirplayIcon} title={'Your videos'} />
            <SidebarRow Icon={LocalMoviesIcon} title={'Watch later'} />
            <SidebarRow Icon={ExpandMoreIcon} title={'Show more'} />
            <hr />
        </div>
    );
}

export default Sidebar;