import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';
import './css/SYoutubeChannelVideoCard.css';

const SYoutubeChannelVideoCard = ({ thumbNail, title, views, timeStamp, channelImage, channelName, verified, description }) => {
    return (
        <div className='sYoutubeChannelVideoCard'>
            <img src={thumbNail} alt={channelName} />
            <div className='sYoutubeChannelVideoCard_text'>
                <Tooltip title={title}>
                <h3>{title}</h3>
                </Tooltip>
                <p>{views} views &#8226; {timeStamp}</p>
                <Tooltip title={channelName}>
                <p className='channelLNV'><Avatar className='channelLogo' alt={channelName} src={channelImage} /> {channelName} {verified ? <CheckCircleIcon className='verifiedIcon' /> : ''}</p>
                </Tooltip>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default SYoutubeChannelVideoCard;