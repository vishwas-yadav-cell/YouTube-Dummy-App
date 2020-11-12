import React ,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import './css/Header.css';

const Header = () => {
    const [val,setVal] = useState('');

    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon className='header_left_menuIcon' />
                <Tooltip title="YouTube Home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube"
                    />
                </Tooltip>
            </div>

            <div className='header_center'>
                <input
                type="text"
                placeholder='Search'
                onChange={(e)=>setVal(e.target.value)}
                value={val}
                />
                <Tooltip title="Search">
                    <Link className="header_center_Link" to={`/search/${val}`}>
                    <SearchIcon className='inputBtn' />
                    </Link>
                </Tooltip>
            </div>

            <div className='header_right'>
                <Tooltip title="Create">
                    <VideoCallIcon className='header_right_icons' />
                </Tooltip>
                <Tooltip title="YouTube apps">
                    <AppsIcon className='header_right_icons' />
                </Tooltip>
                <Tooltip title="Notification">
                    <NotificationsIcon className='header_right_icons' />
                </Tooltip>
                <Avatar
                    className='header_right_icons userProfileLogo'
                    alt=""
                    src="https://avatars2.githubusercontent.com/u/62975291?s=460&v=4"
                />
            </div>
        </div>
    );
}

export default Header;