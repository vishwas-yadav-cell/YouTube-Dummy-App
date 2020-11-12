import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './css/VideoCard.css';

const VideoCard = ({ thumbNail, channelImage, videoTitle, channelName, verified, views, timeStamp }) => {
    return (
        <Tooltip title={videoTitle}>
            <div className='videoCard'>
                <img src={thumbNail} alt={channelName} />
                <div className='videoCard_detail'>
                    <Avatar className='channelLogo' alt={channelName} src={channelImage} />
                    <div className='videoCard_detail_text'>
                        <h4>{videoTitle}</h4>
                        <Tooltip title={channelName}>
                        <p>{channelName} {verified ? <Tooltip title='Verified'><CheckCircleIcon style={{ marginLeft: '5px', fontSize: 'small' }} /></Tooltip> : ''}</p>
                        </Tooltip>
                        <p>{views} views &#8226; {timeStamp}</p>
                    </div>
                </div>
            </div>
        </Tooltip>
    );
}

export default VideoCard;