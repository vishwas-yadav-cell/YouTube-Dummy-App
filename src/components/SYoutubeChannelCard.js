import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';
import './css/SYoutubeChannelCard.css';

const SYoutubeChannelCard = ({ channelImage, channelName, verified, subs, totalVideos, description }) => {
    return (
        <div className='sYoutubeChannelCard'>
            <Avatar className='channelLogo' alt='' src={channelImage} />
            <div className='sYoutubeChannelCard_text'>
            <Tooltip title={channelName}>
            <h3>{channelName} {verified && <CheckCircleIcon className='verifiedIcon' />}</h3>
            </Tooltip>
            <p>{subs} subscribers &#8226; {totalVideos} videos</p>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default SYoutubeChannelCard;